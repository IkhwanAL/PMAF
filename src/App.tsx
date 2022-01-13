import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectPage from "./Layout/AllProject.Layout";
import Dashboard from "./Layout/Dashboard.Layout";
import LoginPages from "./Layout/Login.Layout";
import OneProject from "./Layout/OneProject.Layout";
import RecentPage from "./Layout/Recent.Layout";
import RegisterPage from "./Layout/Register.Layout";

function App() {
	return (
		<div className="bg-blue-500">
			<Routes>
				<Route path="/" element={<LoginPages />} />
				<Route path="/signup" element={<RegisterPage />} />
				<Route
					path="/main/dashboard"
					element={<Dashboard />}
					caseSensitive
				>
					<Route index element={<RecentPage />} />
					<Route path="project" element={<ProjectPage />}>
<<<<<<< HEAD
						<Route path=":idProject"></Route>
=======
						<Route path=":idProject" element={<OneProject />} />
>>>>>>> e6f55796ea9b106c97425aa956e8eec4d5b49518
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
