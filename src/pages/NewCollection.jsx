import { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";
// import { FaUsers, FaTrash, FaPen } from "react-icons/fa";
// import { APIurl } from "../helper/API";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { data } from "autoprefixer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCollection = () => {
	
	const {register, handleSubmit, reset, formState: { errors } } = useForm({ node: 'onChange'});
	let navigate = useNavigate();
	


	const onSubmitNewGroup = async (data) => {
		console.log(data);
		const members = await data.members;
		const newmembers = await members.split(',');
		console.log(newmembers);

		await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups`, {grpName: data.grpName, imgUrl: data.imgUrl, members: newmembers, ownerID: localStorage.getItem('userId')}, {withCredentials: true})
		.then(res => {
			// console.log(res);
			if (res.status===200) {
				console.log("toast now");
				toast.success('Successfully created!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				navigate('/collections')
				// reset();
			}
		}).catch(err=> {
			console.log(err);
			toast.error(err.response.data.status, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		})
	}

	const onSaveAndAdd = async (data) => {
		await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups`, {grpName: data.grpName, imgUrl: data.imgUrl, members:[data.members], ownerID: localStorage.getItem('userId')}, {withCredentials: true})
		.then(res => {
			// console.log(res);
			if (res.status===200) {
				console.log("toast now");
				toast.success('Successfully created!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				reset();
			}
		}).catch(err=> {
			console.log(err);
			toast.error(err.response.data.status, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		})
	}

	const onClearDelete = () => {
		reset();
	}

	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8 ">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Collection
					</h1>
				</div>
				<form className="form-control flex flex-wrap justify-center mt-6 space-y-2" onSubmit={e => e.preventDefault}>
					<label
						type="text"
						htmlFor="grpName"
						className="sm:w-1/2 w-full place-self-center"
					>
						Collection Name
					</label>
					<input
						type="text"
						name="grpName"
						placeholder="Collection Name"
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						{...register('grpName', {required: true, maxLength: 50})}
						// value={grpMembers}
						// onChange={(e) => {
						// 	setGrpMembers(e.target.value);
						// }}
					></input>
					{errors.grpName && errors.grpName.type === "required" && <span className=" text-pink text-xs italic">This field is required</span>}

					<label
						type="text"
						htmlFor="imgUrl"
						className="sm:w-1/2 w-full place-self-center"
					>
						Image's url
					</label>
					<input
						type="text"
						name="imgUrl"
						placeholder="Image URL"
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						{...register('imgUrl')}
						// value={grpDb.imgUrl}
						// onChange={handleChange}
					></input>

					<label
						type="text"
						htmlFor="member"
						className="sm:w-1/2 w-full place-self-center"
					>
						Member's userid /username/ email
					</label>
					<input
						type="text"
						name="members"
						placeholder="eg: John21, Dr.Stranger, Ironman"
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						{...register('members')}
						// value={grpDb.members}
						// onChange={handleChange}11
					></input>

					{/* next sample */}

					{/* <ul className="sm:w-1/2 w-full place-self-center rounded-lg border border-gray-light bg-base-200">
						<li className="inline-flex relative items-center py-2 px-4 w-full font-medium rounded-t-lg border-b border-gray-light">
							<span>Members</span>
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light"
						>
							<span>Yippee</span>{" "}
							<em className="text-sm text-primary">Owner</em>
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light"
						>
							<span>YippeYaya</span>
							<FaTrash />
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light rounded-b-lg "
						>
							<span>Yippyyyy</span>
							<FaTrash />
						</li>
					</ul> */}

					{/* buttons group */}

					
						<div className="flex flex-row place-self-center space-x-2">
							<button
								className="btn btn-outline btn-primary mt-6"
								onClick={handleSubmit(onSubmitNewGroup)}
							>
								Save & go to List
							</button>

							<button className="btn btn-outline btn-primary mt-6" onClick={handleSubmit(onSaveAndAdd)}>
								Save & Add another
							</button>
						

							<button className="btn btn-outline btn-primary mt-6" onClick={handleSubmit(onClearDelete)}>
								Clear/ Delete
							</button>
						</div>
					

					<div className="w-6/12 sm:w-4/12 px-4 place-self-center">
						<img
							src="https://www.gemkom.com.tr/wp-content/uploads/2020/02/NO_IMG_600x600-1.png"
							alt="group-img"
							className="m-6 shadow-lg rounded max-w-full h-auto align-middle border-none "
						></img>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewCollection;
