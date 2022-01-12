import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import { useEffect, useState } from "react";
const Swal = require('sweetalert2')

const CollectionsSglCard = (props) => {
	const checkProp = (props.data === "CollectionMemberDetails")
	let navigate = useNavigate();
	const compareMembers = props.members.filter(member => member !== props.ownerID)
	const [getItemsNumber, setgetItemsNumber] = useState("");

	const getItemsResult = async () => {
		await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/items?grpID=${props.grpID}`, { withCredentials: true })
			.then(res => {
				if (res.status === 200) {
					setgetItemsNumber(res.data.data.length)
				}
			})
	}

	useEffect(() => {
		getItemsResult()
	}, []);

	const handleCollectionsDelete = async () => {
		await Swal.fire({
			icon: 'warning',
			title: 'Are you sure you want to delete this Collection?',
			showDenyButton: true,
			confirmButtonText: 'Yes',
			denyButtonText: 'No',
		}).then(async (result) => {
			if (result.isConfirmed) {
				await axios.delete(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups/${props.grpID}`, { withCredentials: true })
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


		<div class="max-w-sm rounded overflow-hidden shadow-lg">
			<img class="w-full" src={props.imgUrl}
				alt="item"
				className="object-center object-cover"
				width="500"
				height="500"
			/>
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{props.GroupName}</div>
				<p>{props.numMembers} members / {getItemsNumber} item</p>
			</div>
			{checkProp ? ""
				: <div className="flex flex-row">
					<Link to="/collections/edit" state={{ GroupsID: props.grpID, Members: compareMembers, ownerID: props.ownerID }}><button className="btn btn-ghost btn-square">
						<FaPen />
					</button></Link>
					<button className="btn btn-ghost btn-square" onClick={handleCollectionsDelete}>
						<FaTrash />
					</button>
				</div>}


		</div>
	)

};
export default CollectionsSglCard;
