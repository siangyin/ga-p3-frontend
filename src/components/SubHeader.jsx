import { FaPlus } from "react-icons/fa";

const SubHeader = (props) => {
	return (
		<div className="flex flex-row mx-8">
			<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
				my {props.title}
			</h1>

			<button type="button" className="btn btn-primary">
				<FaPlus />
				{props.btn}
			</button>
		</div>
	);
};

export default SubHeader;
