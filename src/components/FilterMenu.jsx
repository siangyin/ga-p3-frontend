import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form"

const FilterMenu = (props) => {
	const { register, handleSubmit,reset} = useForm()

	
	const onSearchNameQuery =  (data) =>
	{
		
		 props.handleItemSearch(data.searchQuery)
		 reset({searchQuery: ""})
	}
	const onSearchBrandQuery =  (data) =>
	{

		props.handleBrandSearch(data.searchBrand)
		reset({searchBrand: ""})

	}

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

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide space-y-2">
				<p className="menu-title">
					<span>Quantity</span>
				</p>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked=""
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
					></input>
					<span className="ml-2">in-house</span>
				</label>

				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked=""
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
					></input>
					<span className="ml-2">out-of-stock</span>
				</label>

				<p className="menu-title">
					<span>Collections</span>
				</p>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked=""
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
					></input>
					<span className="ml-2">Office</span>
				</label>

				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked=""
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
					></input>
					<span className="ml-2">House</span>
				</label>

				{/* fav  */}
				<p className="menu-title">
					<span>Favourite</span>
				</p>
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						checked=""
						className="checkbox bg-base-100 focus:border-primary-500 focus:bg-white"
					></input>
					<span className="ml-2">Favourite items</span>
				</label>
			</form>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default FilterMenu;
