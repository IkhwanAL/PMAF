import React from "react";
import { BehaviorSubject } from "rxjs";
import { DataUser } from "../Props/User.property";

const initialState: DataUser = {
	id: "",
	username: "",
	password: "",
	email: "",
	phoneNumber: "",
};

const behaviourSubject$ = new BehaviorSubject<DataUser>(initialState);

let init = initialState;

export const UserStore = {
	subscribe: (
		setUserState: React.Dispatch<React.SetStateAction<DataUser>>
	) => {
		return behaviourSubject$.subscribe(setUserState);
	},

	setValue: (user: DataUser) => {
		init = user;

		behaviourSubject$.next(init);
	},
	deleteValue: () => {
		init = {
			id: "",
			username: "",
			password: "",
			email: "",
			phoneNumber: "",
		};

		behaviourSubject$.next(init);
	},
	init,
};
