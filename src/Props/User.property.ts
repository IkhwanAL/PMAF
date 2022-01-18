export interface UserLogin {
	username: string;
	password: string;
}

export interface UserRegister {
	username: string;
	password: string;
	email: string;
	confirmPassword: string;
}

export enum TypeUser {
	"Proyek Manager",
	"Tim",
}

export interface DataUser {
	id: string;
	username: string;
	password?: string;
	email: string;
	phoneNumber?: string;
}
