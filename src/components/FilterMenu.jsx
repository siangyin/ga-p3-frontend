import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form"
import axios from "axios";
import React, { useEffect, useState } from "react";

const FilterMenu = (props) => {
	const { register, handleSubmit, reset } = useForm()
	const [listCollections, setlistCollections] = useState([]);
	// const [listMemberCollections, setlistMemberCollections] = useState([]);


	const onSearchNameQuery = (data) => {

		props.handleItemSearch(data.searchQuery)
		reset({ searchQuery: "" })
	}
	const onSearchBrandQuery = (data) => {

		props.handleBrandSearch(data.searchBrand)
		reset({ searchBrand: "" })


	}

	const stockCheck = (e) => {
		props.handleStockCheck(e.target.checked)
	}

	const outOfStockCheck = (e) => {
		props.handleOutOfStockCheck(e.target.checked)

	}

	const collectionsCheck = (e) => {

		if (e.target.checked) {
			props.handleCollectionsCheck(e.target.value)
			console.log(e.target.value)
		}
		else {
			props.handleCollectionsCheck("")
		}


	}

	// const collectionsFriendCheck = (e) => {

	// 	if (e.target.checked) {
	// 		props.handleCollectionsCheck(e.target.value)
	// 	}
	// 	else {
	// 		props.handleCollectionsCheck("")
	// 	}


	// }


	const favouriteCheck = (e) => {
		props.handleFavouriteCheck(e.target.checked)
	}

	const notFavouriteCheck = (e) => {
		props.handleNotFavouriteCheck(e.target.checked)

	}



	const getCollecitons = async () => {
		await axios.get(`http://localhost:5000/api/v1/groups?ownerID=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				setlistCollections(res.data.data)
			})
	}

	// const getCollecitonsMember = async () => {
	// 	await axios.get(`http://localhost:5000/api/v1/groups?members=${localStorage.getItem('userId')}`, { withCredentials: true })
	// 		.then(res => {

	// 			setlistMemberCollections(res.data.data)

	// 		})
	// }

	useEffect(() => {
		getCollecitons()
		// getCollecitonsMember()
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


	// const listFriendsCollections = listMemberCollections.map((data,index) => {
	// 	if (data.ownerID !== localStorage.getItem('userId')) {
	// 		return <label className="inline-flex items-center">
	// 			<input
	// 				type="checkbox"
	// 				className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
	// 				value={data._id}
	// 				{...register('friendsCollection', { onChange: (e) => collectionsFriendCheck(e) })}
	// 				key={index}
	// 			></input>
	// 			<span className="ml-2">{data.grpName}</span>
	// 		</label>
	// 	}
	// })

	// console.log(listMemberCollections)

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

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide">
				<p className="menu-title">
					<span>Expiry Date Range</span>
				</p>
				<input
					type="date"
					value="2021-12-31"
					id="fromdate"
					name="fromdate"
					className="rounded-md input input-bordered bg-base-100 my-2  focus:border-primary-500 focus:bg-white focus:ring-0
                  "
				/>
				<span className="text-center menu-title italic">to</span>
				<input
					type="date"
					value="2021-12-31"
					id="todate"
					name="todate"
					className="rounded-md input input-bordered bg-base-100 my-2  focus:border-primary-500 focus:bg-white focus:ring-0
                  "
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
						{...register('inStock', { onChange: (e) => stockCheck(e) })}
					></input>
					<span className="ml-2">In Stock</span>
				</label>

				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
						{...register('outOfStock', { onChange: (e) => outOfStockCheck(e) })}
					></input>
					<span className="ml-2">Out of Stock</span>
				</label>

				<p className="menu-title">
					<span>Collections</span>
				</p>
				{listofCollecitons}
				

				{/* <p className="menu-title">
					<span>Friends Collections</span>
				</p>
				{listFriendsCollections} */}

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
					<span className="ml-2">Yes</span>
				</label>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
						{...register('notFavourite', { onChange: (e) => notFavouriteCheck(e) })}
					></input>
					<span className="ml-2">No</span>
				</label>
			</form>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default FilterMenu;
