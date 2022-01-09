import React from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import axios from "axios";

const NewItem = () => {


	const getCollecitons = async()=>
	{
		await axios.get(`http://localhost:5000/api/v1/groups?ownerID=${localStorage.getItem('userId')}`,{withCredentials:true})
		.then(res=>
			{
				let listOfCollections = res.data
				console.log(listOfCollections)
				listOfCollections.data.map((data,index)=>
				{	
					console.log(data.grpName)
					return <option>{data.grpName}</option>
				})
			})
	}

	getCollecitons()

	const { register, handleSubmit } = useForm()
	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Item
					</h1>
				</div>
				<form className="form-control flex flex-wrap mt-6" onSubmit={e => e.preventDefault()}>
					<input
						type="text"
						placeholder="Product Name"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('name',{required:true})}
					></input>

					<input
						type="text"
						placeholder="Product Brand"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('brand',{required:true})}
					></input>

					<input
						type="date"
						className="input input-bordered mb-3  sm:w-1/2 w-full  place-self-center"
						{...register('expiryDate',{required:true})}
					></input>

					<input
						type="number"
						id="quantity"
						value="0"
						min="0"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('qty')}
					></input>

					<select
						className="select select-bordered mb-3 sm:w-1/2 w-full place-self-center"
						name="grpName"
					>
						<option disabled="disabled" selected="selected">
							Collection
						</option>
						{getCollecitons}
					</select>

					<input
						type="text"
						name="imgUrl"
						placeholder="Product Image URL"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<div className="p-6 place-self-center">
						<div className="form-control">
							<label className="cursor-pointer label">
								<span className="label-text mr-5">Add to Favourite List</span>
								<input
									type="checkbox"
									checked="checked"
									className="toggle"
								></input>
							</label>
						</div>
					</div>

					<div className="flex flex-row place-self-center space-x-4">
						<button className="btn btn-outline btn-primary">
							Save & go to List
						</button>

						<button className="btn btn-outline btn-primary">
							Save & Add another
						</button>

						<button className="btn btn-outline btn-primary">
							Clear/ Delete
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewItem;
