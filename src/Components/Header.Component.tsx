import { LogoutIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	const onClick = (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		ev.preventDefault();
		navigate("/");
	};

	const onClickUserModal = (
		ev: React.MouseEvent<SVGSVGElement, MouseEvent>
	) => {
		ev.preventDefault();
	};
	return (
		<>
			<div className="flex text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize absolute w-full items-center h-14">
				<div className="flex items-center">
					<div className="ml-1">
						<p className="capitalize text-xl">Logo</p>
					</div>
					<div className="ml-5">
						<Link to={"/main/dashboard"}>
							<p>Home</p>
						</Link>
					</div>
					<div className="ml-5">
						<Link to={"project"}>
							<p>Project</p>
						</Link>
					</div>
				</div>
				<div className="ml-auto flex ">
					<div className="rounded-full mr-3 ml-3 2-10 h-10 content-center border hover:shadow-xl hover:bg-gray-300">
						<button>
							<UserIcon
								className="w-9 h-9 rounded"
								onClick={onClickUserModal}
							/>
						</button>
					</div>
					<div className="rounded-full mr-3 ml-3 w-10 h-10 content-center border hover:shadow-xl hover:bg-gray-300">
						<button title="Logout" className="">
							<LogoutIcon
								className="w-9 h-9 rounded"
								onClick={onClick}
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
