import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';


export default function Items() {
	const [searchItemQuery, setsearchItemQuery] = useState("");
	const [searchBrandQuery, setsearchBrandQuery] = useState("");
	const [instockCheck, setinstockCheck] = useState("");
	const [CollectionsCheck, setCollectionsCheck] = useState("");
	const [FavouriteCheck, setFavouriteCheck] = useState("");

	const handleItemSearch = (searchData) => {
		if (searchBrandQuery) {
			setsearchBrandQuery("")
			setsearchItemQuery(searchData)
		}

		setsearchItemQuery(searchData)

	}

	const handleBrandSearch = (searchData) => {
		if (searchItemQuery) {
			setsearchItemQuery("")
			setsearchBrandQuery(searchData)
		}
		setsearchBrandQuery(searchData)
	}

	const handleStockCheck = (checkData) => {
		if (checkData === true) {
			setinstockCheck("qty>=1")
		}
	

	}

	const handleOutOfStockCheck = (checkData) => {
		if (checkData === true) {
			setinstockCheck("qty=0")
		}


	}

	const handleCollectionsCheck = (checkData) => {
		setCollectionsCheck(checkData)
	}

	const handleFavouriteCheck = (checkData) => {
		if(checkData === true)
		{
			setFavouriteCheck("true")
		}
		else if(checkData === false)
		{
			setFavouriteCheck("")
		}
		
	}

	const handleNotFavouriteCheck = (checkData) => {
		if(checkData === true)
		{
			setFavouriteCheck("false")
		}
		else if(checkData === false)
		{
			setFavouriteCheck("")
		}
		
	}



	return (
		<>
			<SubHeader title="item" />
			<div className="flex flex-row">
				<FilterMenu
					handleItemSearch={handleItemSearch}
					handleBrandSearch={handleBrandSearch}
					handleStockCheck={handleStockCheck}
					handleOutOfStockCheck={handleOutOfStockCheck} 
					handleCollectionsCheck={handleCollectionsCheck}
					handleFavouriteCheck={handleFavouriteCheck}
					handleNotFavouriteCheck={handleNotFavouriteCheck}/>
				<AllResults
					Result="itemData"
					searchedItemQuery={searchItemQuery}
					searchedBrandQuery={searchBrandQuery}
					searchedInStockQuery={instockCheck} 
					searchedCollectionsQuery={CollectionsCheck}
					searchedFavouriteQuery={FavouriteCheck}
					/>
			</div>
		</>
	);
}
