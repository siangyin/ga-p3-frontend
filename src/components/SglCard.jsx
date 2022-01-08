import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";

const SglCard = (props) => {
	const title = "Group - x/ Item";
	const num = 2;

	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="group relative text-sm">
			<input type="checkbox" checked="" className="checkbox absolute"></input>
			<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
				<img
					src="https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11576937_XL1_20210118.jpg"
					alt="item"
					className="object-center object-cover"
				></img>
			</div>
			<a href="#">
				<h4 className="mt-6 block font-medium text-gray-900">{title} </h4>
				<p>Members/QTY: {num}</p>
			</a>
			<div className="flex flex-row">
				<button className="btn btn-ghost btn-square">
					<FaPen />
				</button>
				<button className="btn btn-ghost btn-square">
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default SglCard;
