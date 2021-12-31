import { FaSearch } from "react-icons/fa";

const FilterMenu = (props) => {
	return (
		<aside className="flex flex-col space-y-6 m-5">
			<form className="relative">
				<input
					type="text"
					placeholder="Search items"
					className="w-full input input-bordered bg-base-200 focus:border-primary-500 focus:bg-white"
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-grey">
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
					id="id-date"
					name="name-date"
					className="rounded-md focus:border-primary-500 focus:bg-white focus:ring-0
                  "
				/>
				<span className="text-center menu-title italic">to</span>
				<input
					type="date"
					value="2021-12-31"
					id="id-date"
					name="name-date"
					className="rounded-md focus:border-primary-500 focus:bg-white focus:ring-0
                  "
				/>
			</form>

			{/* sub groups filter button start*/}

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide">
				<p className="menu-title">
					<span>Quantity</span>
				</p>
				<label className="inline-flex items-center">
					<input type="checkbox" checked="" />
					<span className="ml-2">in-house</span>
				</label>

				<label className="inline-flex items-center">
					<input type="checkbox" checked="" />
					<span className="ml-2">out-of-stock</span>
				</label>
			</form>

			{/* sub groups filter button end */}

			{/* sub groups filter button start*/}

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide">
				<p className="menu-title">
					<span>Collections</span>
				</p>
				<label className="inline-flex items-center">
					<input type="checkbox" checked="" />
					<span className="ml-2">Yippee-Personal</span>
				</label>

				<label className="inline-flex items-center">
					<input type="checkbox" checked="" />
					<span className="ml-2">SG-office</span>
				</label>
			</form>

			{/* sub groups filter button end */}
			{/* sub groups filter button start*/}

			<form className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide">
				<p className="menu-title">
					<span>Favourite</span>
				</p>
				<label className="inline-flex items-center">
					<input type="checkbox" checked="" />
					<span className="ml-2">Favourite list</span>
				</label>
			</form>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default FilterMenu;
