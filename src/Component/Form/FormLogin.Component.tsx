import { Link } from "react-router-dom";
export const FormLogin = () => {
	return (
		<div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
			<form className="mr-96 w-fit shadow-md">
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
								type="text"
								className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
							/>
						</div>
						<div>
							<label className="block mb-1 text-gray-600 font-semibold">
								Password
							</label>
							<input
								type="text"
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
			<div className="absolute bottom-0 right-0">
				<div className={style.triangleBottomRight}></div>
			</div>
		</div>
	);
};
