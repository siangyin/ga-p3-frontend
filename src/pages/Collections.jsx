import {
	FaSearch,
	FaPlus,
	FaChevronLeft,
	FaChevronRight,
	FaPen,
	FaTrash,
} from "react-icons/fa";

export default function Collections() {
	return (
		<>
			<div className="flex flex-row">
				<h1 className="text-2xl font-semibold text-primary w-1/2">
					My Collections
				</h1>
				<button type="button" className="btn btn-primary">
					<FaPlus /> Add Item
				</button>
			</div>

			<div className="flex flex-row">
				<aside className="flex flex-col" form-control>
					<form className="relative">
						<input
							type="text"
							placeholder="Search"
							className="w-full pr-16 input input-primary input-bordered"
						></input>
						<button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
							<FaSearch />
						</button>
					</form>

					{/* sub groups filter button start*/}
					<h3 className="text-xl font-medium">Collections</h3>

					<button className="btn btn-wide btn-primary">Personal</button>
					<button className="btn btn-wide btn-primary">Group-1</button>
					<button className="btn btn-wide btn-primary">Home</button>
					<button className="btn btn-wide btn-primary">Office</button>

					{/* sub groups filter button end */}
				</aside>

				<article className="flex flex-col">
					{/* pages number start*/}

					<div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
						<div className="flex-1 flex justify-between sm:hidden">
							<a
								href="#"
								className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
							>
								Previous
							</a>
							<a
								href="#"
								className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:btn-primary"
							>
								Next
							</a>
						</div>
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

					{/* pages number end*/}

					{/* results group item-card number start*/}
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
							{/* results group SGL item-card NO 1*/}

							<div className="group relative text-sm">
								<a href="#" className="mt-6 block font-medium text-gray-900">
									<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
										<img
											src="https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11576937_XL1_20210118.jpg"
											alt="item"
											className="object-center object-cover"
										></img>
									</div>

									<h4 className="mt-6 block font-medium text-gray-900">
										Group-x
									</h4>
									<h4>Members: 2</h4>
								</a>
								<div className="card-actions p-0 m-0">
									<button className="btn btn-outline btn-square">
										<FaPen />
									</button>
									<button className="btn btn-outline btn-square">
										<FaTrash />
									</button>
								</div>
							</div>

							{/* results group SGL item-card NO 2*/}

							<div className="group relative text-sm">
								<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
									<img
										src="https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/355504_XL1_20210428.jpg"
										alt="item"
										className="object-center object-cover"
									></img>
								</div>
								<a href="#" className="mt-6 block font-medium text-gray-900">
									Group-x
								</a>
								<p aria-hidden="true" className="mt-1">
									Member: 1
								</p>
							</div>

							{/*  */}

							<div className="group relative text-sm">
								<div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
									<img
										src="https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/433178_XL1_20201222.jpg"
										alt="item"
										className="object-center object-cover"
									></img>
								</div>
								<a href="#" className="mt-6 block font-medium text-gray-900">
									Group-x
								</a>
								<p aria-hidden="true" className="mt-1">
									Members: 2
								</p>
							</div>

							{/* SGL itemssss end here */}
						</div>
					</div>
					{/* results card number end*/}
				</article>
			</div>
		</>
	);
}
