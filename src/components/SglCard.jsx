import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
const Swal = require('sweetalert2')

const SglCard = (props) => {
	const checkProp = (props.data === "itemDetails")
	const [isChecked, setIsChecked] = useState(true);
	let navigate = useNavigate();


	const handleItemDelete = async () => {
		await Swal.fire({
			icon: 'warning',
			title: 'Are you sure you want to delete this item?',
			showDenyButton: true,
			confirmButtonText: 'Yes',
			denyButtonText: 'No',
		}).then(async (result) => {
			if (result.isConfirmed) {
				await axios.delete(`http://localhost:5000/api/v1/items/${props.id}`, { withCredentials: true })
					.then(res => {
						if (res.status === 200) {
							Swal.fire({
								icon: 'success',
								title: 'Delete Successful!',
								confirmButtonText: 'Click to continue'
							}).then(() => {
								navigate(0)
							})
						}
					}).catch(err => {
						if (err) {
							toast.error(err.response.data.message, {
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						}
					})
			} else if (result.isDenied) {
				Swal.fire({
					icon: 'error',
					title: 'Delete cancelled!',
					confirmButtonText: 'Click to continue'
				})
			}
		})

	}


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
				<Link to="/items/edit" state={{ itemsID: props.id }}><button className="btn btn-ghost btn-square">
					<FaPen />
				</button></Link>
				<button className="btn btn-ghost btn-square" onClick={handleItemDelete}>
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
