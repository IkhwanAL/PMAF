export interface UserLogin {
	username: string | undefined;
	password: string | undefined;
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
