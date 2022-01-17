import CardProject from "../Components/Card.Component";
import Data from "../_mock/_recent.json";

const MAX_NUMBER = 4;
const RecentPage = () => {
	const sliceData = Data.slice(0, MAX_NUMBER);
	return (
		<div className="flex-col bg-gradient-to-br from-blue-600 to-indigo-600 min-h-screen">
			<div className="pt-20 pb-10">
				<p className="text-center text-2xl font-semibold text-gray-100">
					Recent Project
				</p>
				<div className="flex content-start flex-wrap items-center justify-center">
					{sliceData.map((x) => {
						return (
							<CardProject
								owner={x.owner}
								id={x.id}
								description={x.description}
								dueDate={x.dueDate}
								projectName={x.projectName}
							/>
						);
					})}
				</div>
			</div>
			<div className="pt-10 pb-10">
				<p className="text-center text-2xl font-semibold text-gray-100">
					Recent Activity
				</p>
				<div className="flex content-start flex-wrap items-center justify-center">
					{sliceData.map((x) => {
						return (
							<CardProject
								owner={x.owner}
								id={x.id}
								description={x.description}
								projectName={x.projectName}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RecentPage;
