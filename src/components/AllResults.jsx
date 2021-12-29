import Pagination from "./Pagination";
import SglCard from "./SglCard";

const AllResults = () => {
	return (
		<article className="flex flex-col">
			<Pagination />

			{/* results group item-card number start*/}
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
					{/* results group SGL item-card NO 1*/}
					<SglCard />
					<SglCard />
					<SglCard />
					<SglCard />
				</div>
			</div>
			{/* results card number end*/}
		</article>
	);
};

export default AllResults;
