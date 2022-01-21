import { useLayoutEffect, useState } from "react";
import { DataUser } from "../../Props/User.property";
import { UserStore } from "../../store/user.store";

export default function FormUserUI() {
	const [user, setUser] = useState<DataUser>(UserStore.init);

	useLayoutEffect(() => {
		const Subs = UserStore.subscribe(setUser);

		return () => {
			Subs.unsubscribe();
		};
	}, [user]);
	return (
		<>
			<div className="m-10">
				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="first-name"
							className="block text-md font-medium text-gray-700"
						>
							First name
						</label>
						<input
							type="text"
							name="first-name"
							id="first-name"
							autoComplete="given-name"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="last-name"
							className="block text-md font-medium text-gray-700"
						>
							Last name
						</label>
						<input
							type="text"
							name="last-name"
							id="last-name"
							autoComplete="family-name"
							className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
