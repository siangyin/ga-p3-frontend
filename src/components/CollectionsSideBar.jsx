import { FaSearch } from "react-icons/fa";

const CollectionsSideBar = () => {
	return (
		<aside className="flex flex-col space-y-6 m-5">
			<form className="relative">
				<input
					type="text"
					placeholder="Search collections"
					className="w-full input input-grey input-bordered bg-base-200"
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-grey">
					<FaSearch />
				</button>
			</form>

			{/* sub groups filter button start*/}

			<ul class="menu p-4 shadow-lg bg-base-100 rounded-box btn-wide">
				<li class="menu-title">
					<span>My Collections</span>
				</li>

				<li className="hover:font-bold hover:text-primary">
					<a>Item with icon</a>
				</li>

				<li className="hover:font-bold hover:text-primary">
					<a>Item with icon</a>
				</li>

				<li className="hover:font-bold hover:text-primary">
					<a>Item with icon</a>
				</li>
			</ul>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default CollectionsSideBar;
