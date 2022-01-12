import axios from "axios";
import { useEffect, useState } from "react";
import CollectionsSglCard from "./CollectionsSglCard";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




const CollectionsResults = (props) => {

    const [getUserGroup, setgetUserGroup] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 8;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(getUserGroup.length / PER_PAGE);

    const getGroups = async () => {
        await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups?search=${props.searchedCollectionsQuery}&ownerID=${localStorage.getItem('userId')}`, { withCredentials: true })
            .then(res => {
                setgetUserGroup(res.data.data)
            })
    }

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }


    useEffect(() => {
        getGroups()

    }, [props.searchedCollectionsQuery]);

    const getGroupsResult = getUserGroup.slice(offset, offset + PER_PAGE).map((data, index) => {
        return <CollectionsSglCard GroupName={data.grpName} imgUrl={data.imgUrl} numMembers={data.members.length} grpID={data._id} members={data.members} ownerID={data.ownerID} key={index} />
    })


    return (
        <article className="flex flex-col">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                    Showing
                    <span className="font-medium"> {getGroupsResult.length}  </span>
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
                    {getGroupsResult}

                </div>
            </div>
        </article>

    );
};

export default CollectionsResults;
