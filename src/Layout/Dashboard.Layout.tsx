import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header.Component";

const Dashboard = () => {
	return (
		<>
			<div className="">
				<Header />
				<Outlet />
			</div>
		</>
	);
};

export default Dashboard;
