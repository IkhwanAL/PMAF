import {
	BehaviorSubject,
	distinctUntilKeyChanged,
	Observable,
	pluck,
	Subscription,
} from "rxjs";

export interface Action {
	type: string;
	payload?: any;
}

export class Store<T> {
	private _state: BehaviorSubject<T>;
	private _reducer: (state: T, action: Action) => T;

	constructor(reducer: (state: T, action: Action) => T, initialState: T) {
		this._state = new BehaviorSubject(initialState);
		this._reducer = reducer;
	}

	subscribe = (callback: (state: T) => void): Subscription => {
		return this._state.subscribe(callback);
	};

	dispatch = (action: Action): void => {
		const oldState = this._state.getValue();
		const newState = this._reducer(oldState, action);
		this._state.next(newState);
	};

	select<K extends keyof T>(key: K): Observable<T[K]> {
		return this._state.pipe(distinctUntilKeyChanged(key), pluck(key));
	}

	asyncDispacth = async <R>(
		type: string,
		runner: (state: T) => Promise<R>
	): Promise<void> => {
		const payload = runner(this._state.getValue());
		this.dispatch({ type, payload });
	};
}
