import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewItem = () => {

	const [listCollections, setlistCollections] = useState([]);
	const [selectedCollection, setselectedCollection] = useState();
	const { register, handleSubmit, reset } = useForm()
	let navigate = useNavigate();

	const getCollecitons = async () => {
		await axios.get(`http://localhost:5000/api/v1/groups?ownerID=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				setlistCollections(res.data.data)
			})
	}


	useEffect(() => {
		getCollecitons()
	}, []);

	console.log(listCollections)

	const options = listCollections.map((data, index) => {
		return <option key={index} value={data._id} >{data.grpName}</option>
	})

	const handleChange = (e) => {
		setselectedCollection(e.target.value)
	}

	const onCreate = async (data) => {
		await axios.post(`http://localhost:5000/api/v1/items/`, {
			name: data.name,
			brand: data.brand,
			expiryDate: data.expiryDate,
			fav: data.fav,
			imgUrl: data.imgUrl,
			qty: data.qty,
			grpID: selectedCollection,
			createdBy: localStorage.getItem('userId')

		}, { withCredentials: true })
			.then(res => {
				if (res.status === 200) {
					toast.success('Successfully created!', {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					navigate('/items')
				}

			}).catch(err => {
				toast.error(err.response.data.message, {
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

	const onAddAnother = async (data) => {
		await axios.post(`http://localhost:5000/api/v1/items/`, {
			name: data.name,
			brand: data.brand,
			expiryDate: data.expiryDate,
			fav: data.fav,
			imgUrl: data.imgUrl,
			qty: data.qty,
			grpID: selectedCollection,
			createdBy: localStorage.getItem('userId')

		}, { withCredentials: true })
			.then(res => {
				if (res.status === 200) {
					toast.success('Successfully created!', {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					reset()
				}

			}).catch(err => {
				toast.error(err.response.data.message, {
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

	const onClear = async () => {
		reset()
	}



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
						{...register('name', { required: true, })}
					></input>

					<input
						type="text"
						placeholder="Product Brand"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('brand', { required: true })}
					></input>

					<input
						type="date"
						className="input input-bordered mb-3  sm:w-1/2 w-full  place-self-center"
						{...register('expiryDate', { required: true })}
					></input>

					<input
						type="number"
						id="quantity"
						min="0"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('qty')}
					></input>

					<select
						className="select select-bordered mb-3 sm:w-1/2 w-full place-self-center"
						name="grpName" value={selectedCollection} onChange={handleChange} defaultValue="Collection"
					>
						<option disabled="disabled" value="Collection">
							Select Collection
						</option>
						{options}
					</select>

					<input
						type="text"
						placeholder="Product Image URL"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
						{...register('imgUrl')}
					></input>

					<div className="p-6 place-self-center">
						<div className="form-control">
							<label className="cursor-pointer label">
								<span className="label-text mr-5">Add to Favourite List</span>
								<input
									type="checkbox"
									className="toggle"
									{...register('fav')}
								></input>
							</label>
						</div>
					</div>

					<div className="flex flex-row place-self-center space-x-4">
						<button className="btn btn-outline btn-primary" onClick={handleSubmit(onCreate)}>
							Save & go to List
						</button>

						<button className="btn btn-outline btn-primary" onClick={handleSubmit(onAddAnother)}>
							Save & Add another
						</button>

						<button className="btn btn-outline btn-primary" onClick={handleSubmit(onClear)}>
							Clear/ Delete
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewItem;
