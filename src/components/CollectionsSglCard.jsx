import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import moment from "moment";
const Swal = require('sweetalert2')

const CollectionsSglCard = (props) => {

    console.log(props)
	let navigate = useNavigate();
	let date = moment(props.expiryDate).format("LL")


	// const handleItemDelete = async () => {
	// 	await Swal.fire({
	// 		icon: 'warning',
	// 		title: 'Are you sure you want to delete this item?',
	// 		showDenyButton: true,
	// 		confirmButtonText: 'Yes',
	// 		denyButtonText: 'No',
	// 	}).then(async (result) => {
	// 		if (result.isConfirmed) {
	// 			await axios.delete(`http://localhost:5000/api/v1/items/${props.id}`, { withCredentials: true })
	// 				.then(res => {
	// 					if (res.status === 200) {
	// 						Swal.fire({
	// 							icon: 'success',
	// 							title: 'Delete Successful!',
	// 							confirmButtonText: 'Click to continue'
	// 						}).then(() => {
	// 							navigate(0)
	// 						})
	// 					}
	// 				}).catch(err => {
	// 					if (err) {
	// 						toast.error(err.response.data.message, {
	// 							position: "top-right",
	// 							autoClose: 5000,
	// 							hideProgressBar: false,
	// 							closeOnClick: true,
	// 							pauseOnHover: true,
	// 							draggable: true,
	// 							progress: undefined,
	// 						});
	// 					}
	// 				})
	// 		} else if (result.isDenied) {
	// 			Swal.fire({
	// 				icon: 'error',
	// 				title: 'Delete cancelled!',
	// 				confirmButtonText: 'Click to continue'
	// 			})
	// 		}
	// 	})

	// }


	return (
     

		<div class="max-w-sm rounded overflow-hidden shadow-lg">
			<img class="w-full" src={props.imgUrl}
				alt="item"
				className="object-center object-cover"
				width="500"
				height="500"
			/>
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{}</div>
				<p class="text-gray-700 text-base">{props.GroupName} </p>
				<p>{props.numMembers} members</p>
			
			</div>
			<div className="flex flex-row">
				<Link to="/collections/edit" state={{ GroupsID: props.grpID }}><button className="btn btn-ghost btn-square">
					<FaPen />
				</button></Link>
				<button className="btn btn-ghost btn-square">
					<FaTrash />
				</button>
			</div> 

		</div>
	)

};
export default CollectionsSglCard;
