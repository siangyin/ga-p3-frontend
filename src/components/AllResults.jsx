import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import SglCard from "./SglCard";

const AllResults = (props) => {
	const [getUserItems, setgetUserItems] = useState([]);

	const getItems = async () => {
		await axios.get(`http://localhost:5000/api/v1/items?createdby=${localStorage.getItem('userId')}`, { withCredentials: true })
			.then(res => {
				setgetUserItems(res.data.data)
			})
	}

	useEffect(() => {
		getItems()
	}, []);

	const itemData = getUserItems.map((data,index) => {
		console.log(data)
		return <SglCard itemName={data.name} brand={data.brand} grpName={data.grpID.grpName} expiryDate={data.expiryDate} imgUrl={data.imgUrl} qty={data.qty} id={data._id} fav={data.fav} data="itemDetails" key={index} />
	})

	return (
		<article className="flex flex-col">
			<Pagination />
			{/* {mapItems} */}
			{/* results group item-card number start*/}
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
					{/* results group SGL item-card NO 1*/}
					
					{props.Result === "itemData" ? itemData  : <p>hello</p>}
				</div>
			</div>
			{/* results card number end*/}
		</article>
	);
};

export default AllResults;
