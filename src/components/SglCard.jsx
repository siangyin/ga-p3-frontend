import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const SglCard = (props) => {
	const checkProp = (props.data === "itemDetails")
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="group relative text-sm">
			<input type="checkbox" checked="" className="checkbox absolute"></input>
			<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
				<img
					src={checkProp ? props.imgUrl : "collection url"}
					alt="item"
					className="object-center object-cover"
				></img>
			</div>
			<a href="#">
				<h4 className="mt-6 block font-medium text-gray-900">{checkProp ? `Name: ${props.itemName}` : <p>collection name</p>} </h4>
				<p className="mt-3 block font-medium text-gray-900">{checkProp ? `Brand: ${props.brand}` : `Members`}</p>
				<p className="mt-3 block font-medium text-gray-900">{checkProp ? `QTY: ${props.qty}` : `Members`}</p>
			</a>

			{checkProp ? <div className="flex flex-row">
				<Link to = "/items/edit" state={{itemsID: props.id}}><button className="btn btn-ghost btn-square">
					<FaPen />
				</button></Link>
				<button className="btn btn-ghost btn-square">
					<FaTrash />
				</button>
			</div> : <div className="flex flex-row">
				<button className="btn btn-ghost btn-square">
					<FaPen />
				</button>
				<button className="btn btn-ghost btn-square">
					<FaTrash />
				</button>
			</div>}

		</div>
	);
};

export default SglCard;
