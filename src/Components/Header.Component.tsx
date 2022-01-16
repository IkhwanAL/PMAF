import { LogoutIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	const onClick = (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		ev.preventDefault();
		navigate("/");
	};
	return (
		<div className="flex p-2 text-gray-900 bg-white rounded-sm shadow-lg font-medium capitalize">
			<div
				// style={{ borderRadius: 10, backgroundColor: "black" }}
				className="rounded-full w-10 h-10 ml-auto hover:shadow-xl hover:bg-gray-300 "
			>
				<button title="Logout" className="mt-0.5">
					<LogoutIcon
						className="w-9 h-9 rounded pl-1"
						onClick={onClick}
					/>
				</button>
			</div>
		</div>
	);
};
