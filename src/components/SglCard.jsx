import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";

const SglCard = (props) => {
	console.log(props.data)
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="group relative text-sm">
			<input type="checkbox" checked="" className="checkbox absolute"></input>
			<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
				<img
					src={props.data === "itemDetails" ? props.imgUrl : "collection url"}
					alt="item"
					className="object-center object-cover"
				></img>
			</div>
			<a href="#">
				<h4 className="mt-6 block font-medium text-gray-900">{props.data === "itemDetails" ? `Name: ${props.itemName}` : <p>collection name</p>} </h4>
				<p className="mt-3 block font-medium text-gray-900">{props.data === "itemDetails" ? `Brand: ${props.brand}` : `Members`}</p>
				<p className="mt-3 block font-medium text-gray-900">{props.data === "itemDetails" ? `QTY: ${props.qty}` : `Members`}</p>
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
