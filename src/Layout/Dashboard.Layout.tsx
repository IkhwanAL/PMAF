import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderUI from "../Components/HeaderUI.Component";
import { modalStore } from "../store/modal.store";

const Dashboard = () => {
	const [modal, setModal] = useState<boolean>(modalStore.initValue);

	useLayoutEffect(() => {
		const subscription = modalStore.subscribe(setModal);

		return () => {
			subscription.unsubscribe();
		};
	}, [modal]);
	return (
		<>
			<HeaderUI />
			<Outlet />
		</>
	);
};

export default Dashboard;
