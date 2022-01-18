import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header.Component";
import { modalStore } from "../store/modal.store";

const Dashboard = () => {
	const [modal, setModal] = useState<boolean>(modalStore.initValue);

	useLayoutEffect(() => {
		const subs = modalStore.subscribe(setModal);

		return () => {
			subs.unsubscribe();
		};
	});
	console.log(`${modal ? "bg-gray-400" : "asd"}`);
	return (
		<>
			<div className="bg-gray-400 z-40">
				<Header />
				<Outlet />
			</div>
		</>
	);
};

export default Dashboard;
