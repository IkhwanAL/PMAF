import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header.Component";

const Dashboard = () => {
	return (
		<>
			<div className="w-full h-full">
				<Header />
			</div>
			<Outlet />
		</>
	);
};

export default Dashboard;
