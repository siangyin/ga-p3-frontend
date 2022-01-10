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
	const [expiryCheck, setexpiryCheck] = useState("");


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


	const handleOutOfStockCheck = (checkData) => {
		if (checkData === true) {
			setinstockCheck("qty=0")
		}
		else if (checkData === false) {
			setinstockCheck("qty>=1")
		}


	}

	const handleCollectionsCheck = (checkData) => {
		setCollectionsCheck(checkData)
	}

	const handleFavouriteCheck = (checkData) => {
		if (checkData === true) {
			setFavouriteCheck("true")
		}
		else if (checkData === false) {
			setFavouriteCheck("false")
		}

	}

	const handleExpiryCheck = (checkData) => {
		setexpiryCheck(checkData)

	}





	return (
		<>
			<SubHeader title="item" />
			<div className="flex flex-row">
				<FilterMenu
					handleItemSearch={handleItemSearch}
					handleBrandSearch={handleBrandSearch}
					handleOutOfStockCheck={handleOutOfStockCheck}
					handleCollectionsCheck={handleCollectionsCheck}
					handleFavouriteCheck={handleFavouriteCheck}
					handleExpiryCheck={handleExpiryCheck} />
				<AllResults
					Result="itemData"
					searchedItemQuery={searchItemQuery}
					searchedBrandQuery={searchBrandQuery}
					searchedInStockQuery={instockCheck}
					searchedCollectionsQuery={CollectionsCheck}
					searchedFavouriteQuery={FavouriteCheck}
					searchedExpiryDate={expiryCheck}
				/>
			</div>
		</>
	);
}
