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

let state = initialState;

export const UserStore = {
	subscribe: (
		setUserState: React.Dispatch<React.SetStateAction<DataUser>>
	) => {
		subject.subscribe(setUserState);
	},
};
