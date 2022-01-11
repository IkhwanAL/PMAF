import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPages from "./Layout/Login.Layout";
import RegisterPage from "./Layout/Register.Layout";

function App() {
	return (
		<div className="bg-blue-500">
			<Routes>
				<Route path="/" element={<LoginPages />} />
				<Route path="/signup" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
