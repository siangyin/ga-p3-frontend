import { FaSearch } from "react-icons/fa";

const CollectionsSideBar = () => {
	return (
		<aside className="flex flex-col space-y-6 m-5">
			<form className="relative">
				<input
					type="text"
					placeholder="Search Collections"
					className="w-full input input-bordered bg-base-200 focus:border-primary-500 focus:bg-white"
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-grey">
					<FaSearch />
				</button>
			</form>

			{/* sub groups filter button start*/}

			<article className="menu p-4 shadow-md rounded-box bg-base-200 btn-wide space-y-1.5">
				<p className="menu-title">
					<span>Collections List</span>
				</p>

				<p class="hover:text-primary">House</p>

				<p class="hover:text-primary">Office</p>
			</article>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default CollectionsSideBar;