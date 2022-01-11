import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
	return (
		<div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing
						<span className="font-medium"> 1 </span>
						to
						<span className="font-medium">10 </span>
						of
						<span className="font-medium"> 30 </span>
						results
					</p>
				</div>
				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						{/* << */}
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<FaChevronLeft />
						</a>

						<a
							href="#"
							aria-current="page"
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							1
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							2
						</a>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
						>
							3
						</a>
						<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
							...
						</span>
						<a
							href="#"
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
						>
							10
						</a>

						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Next</span>
							{/* <!-- Heroicon name: solid/chevron-right --> */}
							<FaChevronRight />
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
