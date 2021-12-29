import { FaSearch } from "react-icons/fa";

const FilterMenu = (props) => {
	return (
		<aside className="flex flex-col">
			<form className="relative">
				<input
					type="text"
					placeholder="Search collections"
					className="w-full pr-16 input input-primary input-bordered"
				></input>
				<button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
					<FaSearch />
				</button>
			</form>

			{/* sub groups filter button start*/}
			<h3 className="text-xl font-medium text-center">Collections</h3>
			<ul>
				<li className="hover:font-bold hover:text-primary btn-wide">
					Personal
				</li>
				<li className="hover:font-bold hover:text-primary btn-wide">Group-1</li>
				<li className="hover:font-bold hover:text-primary btn-wide">Home</li>
				<li className="hover:font-bold hover:text-primary btn-wide">Office</li>
			</ul>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default FilterMenu;
