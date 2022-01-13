import React, { ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../Styles/Triangle.module.scss";

export const FormLogin = () => {
	const [user, setUser] = useState<{ [key: string]: string }>();
	const [errorState, setErrorState] = useState<boolean | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		let timeoutAlert: any = null;
		if (errorState != null && errorState === true) {
			timeoutAlert = setTimeout(() => {
				setErrorState(false);
			}, 3000);
		}
		return () => {
			clearTimeout(timeoutAlert);
		};
	});

	interface UserLogin {
		username: string;
		password: string;
	}

	const instanceOfUser = (object: any): object is UserLogin => {
		return "username" in object && "password" in object;
	};

	const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		if (!user) {
			setErrorState(true);
			return;
		}
		if (instanceOfUser(user)) {
			navigate("/main/dashboard", { replace: true });
			return;
		}

		setErrorState(true);
	};

	const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>): void => {
		ev.preventDefault();
		const { name, value } = ev.target;
		setUser({ ...user, [name]: value });
	};

	const setError = (): ReactElement => {
		let classAlert: string = "";
		if (errorState === true) {
			classAlert = `animate-fade-in-down`;
		} else if (errorState === false) {
			classAlert = `animate-fade-in-down-deep invisible`;
		} else if (errorState == null) {
			classAlert = `invisible`;
		}

		return (
			<div
				className={`absolute bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 top-3 ${classAlert}`}
				role="alert"
			>
				<div className="flex">
					<svg
						className="w-5 h-5 inline mr-3"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clipRule="evenodd"
						></path>
					</svg>
					<div>
						<span className="font-medium">
							Username Dan Password Tidak Sesuai
						</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
			{setError()}
			<form onSubmit={onSubmit} className="mr-80 w-fit shadow-lg ">
				<div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
					<div className="space-y-4">
						<h1 className="text-center text-2xl font-semibold text-gray-600">
							Login
						</h1>
						<div>
							<label className="block mb-1 text-gray-600 font-semibold">
								Username
							</label>
							<input
								onChange={onChangeInput}
								type="text"
								name="username"
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
							/>
						</div>
						<div>
							<label className="block mb-1 text-gray-600 font-semibold">
								Password
							</label>
							<input
								onChange={onChangeInput}
								name="password"
								type="password"
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
							/>
						</div>
					</div>
					<button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
						Sign In
					</button>
					<p className="items-center mt-4 mb-4 text-center">
						Don't Have An Account
					</p>
					<div className="flex justify-center">
						<Link to="/signup">
							<button className="border-2 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</form>
			<div className={classes.arrowRight}></div>
		</div>
	);
};
