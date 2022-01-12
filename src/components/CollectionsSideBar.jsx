import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const CollectionsSideBar = () => {
	const [listMemberCollections, setlistMemberCollections] = useState([]);


	const getCollecitonsMember = async () => {
		await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups?members=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				setlistMemberCollections(res.data.data)
			})
	}


	useEffect(() => {
		getCollecitonsMember()
	}, []);

	const listFriendsCollections = listMemberCollections.map((data, index) => {
		if (data.ownerID !== localStorage.getItem('userId')) {
			return <Link to={`/collections/${data.grpName}`} state={{ friendsNumMembers: data.members.length, friendsgrpName: data.grpName, friendsMembers: data.members, friendsimgURL: data.imgUrl, ownerID: data.ownerID }} ><button className="block sm:inline-block sm:mt-0 text-s  hover:text-primary mr-5" key={index}>{data.grpName}</button></Link>
		}
		return true
	})

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
					<span>Friends Collections</span>

				</p>
				{listFriendsCollections}

			</article>

			{/* sub groups filter button end */}
		</aside>
	);
};

export default CollectionsSideBar;
