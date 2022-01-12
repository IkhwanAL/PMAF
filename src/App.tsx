import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Layout/Dashboard.Layout";
import LoginPages from "./Layout/Login.Layout";
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
				/>
			</Routes>
		</div>
	);
}

export default App;
