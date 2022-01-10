import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FilterMenu = (props) => {
	const { register, handleSubmit, reset } = useForm()
	const [listCollections, setlistCollections] = useState([]);
	const [listMemberCollections, setlistMemberCollections] = useState([]);
	let navigate = useNavigate();


	const onSearchNameQuery = (data) => {

		props.handleItemSearch(data.searchQuery)
		reset({ searchQuery: "" })
	}
	const onSearchBrandQuery = (data) => {

		props.handleBrandSearch(data.searchBrand)
		reset({ searchBrand: "" })


	}

	const outOfStockCheck = (e) => {
		props.handleOutOfStockCheck(e.target.checked)

	}

	const collectionsCheck = (e) => {

		if (e.target.checked) {
			props.handleCollectionsCheck(e.target.value)
		}


	}

	const favouriteCheck = (e) => {
		props.handleFavouriteCheck(e.target.checked)
	}


	const checkExpiryDate = (e) => {
		props.handleExpiryCheck(e.target.value)
	}

	const getCollecitons = async () => {
		await axios.get(`http://localhost:5000/api/v1/groups?ownerID=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				setlistCollections(res.data.data)
			})
	}

	const getCollecitonsMember = async () => {
		await axios.get(`http://localhost:5000/api/v1/groups?members=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				console.log(res.data.data)
				setlistMemberCollections(res.data.data)

			})
	}


	useEffect(() => {
		getCollecitons()
		getCollecitonsMember()
	}, []);

	const listofCollecitons = listCollections.map((data, index) => {
		return <label className="inline-flex items-center">
			<input
				type="radio"
				className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
				value={data._id}
				{...register('collections', { onChange: (e) => collectionsCheck(e) })}
				key={index}
			></input>
			<span className="ml-2">{data.grpName}</span>
		</label>
	})


	const listFriendsCollections = listMemberCollections.map((data, index) => {
		if (data.ownerID !== localStorage.getItem('userId')) {
			return <Link to={`/items/${data.grpName}`} state={{ grpID: data._id, grpName: data.grpName }} ><button className="block sm:inline-block sm:mt-0 text-s  hover:text-primary mr-5" key={index}>{data.grpName}</button></Link>
		}
	})


	return (
		<aside className="flex flex-col space-y-6 m-5">
			<form className="relative" onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search items"
					className="w-full input input-bordered bg-base-200 focus:border-primary-500 focus:bg-white"
					{...register('searchQuery')}
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-grey" onClick={handleSubmit(onSearchNameQuery)}>
					<FaSearch />
				</button>
			</form>
			<form className="relative" onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search Brand"
					className="w-full input input-bordered bg-base-200 focus:border-primary-500 focus:bg-white"
					{...register('searchBrand')}
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-grey" onClick={handleSubmit(onSearchBrandQuery)}>
					<FaSearch />
				</button>
			</form>

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide" onSubmit={e => e.preventDefault()}>
				<p className="menu-title">
					<span>Expiry Date Range</span>
				</p>
				<input
					type="date"
					id="fromdate"
					name="fromdate"
					className="rounded-md input input-bordered bg-base-100 my-2  focus:border-primary-500 focus:bg-white focus:ring-0"
					{...register('expiryDate', { onChange: (e) => checkExpiryDate(e) })}
				/>
			</form>

			{/* sub groups filter button start*/}

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide space-y-2" onSubmit={e => e.preventDefault()}>
				<p className="menu-title">
					<span>Quantity</span>
				</p>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
						{...register('outOfStock', { onChange: (e) => outOfStockCheck(e) })}
					></input>
					<span className="ml-2">Out of Stock/In Stock</span>
				</label>

				<p className="menu-title">
					<span>Collections</span>
				</p>
				{listofCollecitons}

				{/* fav  */}
				<p className="menu-title">
					<span>Favourite</span>
				</p>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
						{...register('favourite', { onChange: (e) => favouriteCheck(e) })}
					></input>
					<span className="ml-2">Yes/No</span>
				</label>
				<p className="menu-title">
					<span>Friends Collections</span>
				</p>
				{listFriendsCollections}
				<button className="btn btn-outline btn-primary" onClick={() => navigate(0)}>
					Reset Filters
				</button>
			</form>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default FilterMenu;
