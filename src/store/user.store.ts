import React from "react";
import { Subject } from "rxjs";
import { DataUser } from "../Props/User.property";
const subject = new Subject<DataUser>();

const initialState: DataUser = {
	id: "",
	username: "",
	password: "",
	email: "",
	phoneNumber: "",
};

let init = initialState;

export const UserStore = {
	subscribe: (
		setUserState: React.Dispatch<React.SetStateAction<DataUser>>
	) => {
		return subject.subscribe(setUserState);
	},

	setValue: (user: DataUser) => {
		init = user;
		subject.next(init);
	},
	init,
};
