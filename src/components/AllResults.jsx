import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SglCard from "./SglCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AllResults = (props) => {
	const [getUserItems, setgetUserItems] = useState([]);
	const [getMemberItems, setgetMemberItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const PER_PAGE = 8;
	const offset = currentPage * PER_PAGE;
	const pageCount = Math.ceil(getUserItems.length / PER_PAGE);


	const getItems = async () => {
		await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/items?sort=&fields=&valueFilter=${props.searchedInStockQuery}&createdby=${localStorage.getItem('userId')}&grpID=${props.searchedCollectionsQuery}&fav=${props.searchedFavouriteQuery}&name=${props.searchedItemQuery}&brand=${props.searchedBrandQuery}&expiryDate=${props.searchedExpiryDate}`, { withCredentials: true })
			.then(res => {
				setgetUserItems(res.data.data)
			})
	}

	const getGroupItems = async () => {
		await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/items?grpID=${props.grpID}`, { withCredentials: true })
			.then(res => {
				setgetMemberItems(res.data.data)
			})
	}

	useEffect(() => {
		getItems()
		getGroupItems()
	}, [props.searchedItemQuery, props.searchedBrandQuery, props.searchedInStockQuery, props.searchedCollectionsQuery, props.searchedFavouriteQuery, props.searchedExpiryDate]);


	const currentPageData = getUserItems
		.slice(offset, offset + PER_PAGE)
		.map((data, index) => {
			return <SglCard itemName={data.name} brand={data.brand} grpName={data.grpID.grpName} expiryDate={data.expiryDate} imgUrl={data.imgUrl} qty={data.qty} id={data._id} fav={data.fav} data="itemDetails" key={index} />
		})

	const MemberPageData = getMemberItems
		.slice(offset, offset + PER_PAGE)
		.map((data, index) => {
			return <SglCard itemName={data.name} brand={data.brand} grpName={data.grpID.grpName} expiryDate={data.expiryDate} imgUrl={data.imgUrl} qty={data.qty} id={data._id} fav={data.fav} data="itemMemberDetails" key={index} />
		})


	const handlePageClick = ({ selected: selectedPage }) => {
		setCurrentPage(selectedPage)
	}

	return (

		<article className="flex flex-col">
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<p className="text-sm text-gray-700">
					Showing
					<span className="font-medium"> {props.Result === "itemData" ? currentPageData.length : MemberPageData.length}  </span>
					to
					<span className="font-medium"> {PER_PAGE} </span>
					of
					<span className="font-medium"> {pageCount} </span>
					results
				</p>
			</div>
			<div className="flex justify-end " >
				<ReactPaginate
					nextLabel={<FaChevronRight />}
					onPageChange={handlePageClick}
					pageCount={pageCount}
					previousLabel={<FaChevronLeft />}
					pageClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
					previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					breakLabel="..."
					breakClassName="page-item"
					breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
					aria-label="Pagination"
					className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
					renderOnZeroPageCount={null}
				/>
			</div>

			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
					{/* results group SGL item-card NO 1*/}

					{props.Result === "itemData" ? currentPageData : MemberPageData}
				</div>
			</div>
			{/* results card number end*/}
		</article>

	);
};

export default AllResults;
