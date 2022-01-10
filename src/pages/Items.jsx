import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';


export default function Items() {
	const [searchItemQuery, setsearchItemQuery] = useState("");
	const [searchBrandQuery, setsearchBrandQuery] = useState("");
	const [instockCheck, setinstockCheck] = useState("");

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
		else if (checkData === false) {
			setinstockCheck("")
		}

	}

	const handleOutOfStockCheck = (checkData) => {
		if (checkData === true) {
			setinstockCheck("qty=0")
		}
		else if (checkData === false) {
			setinstockCheck("")
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
					handleOutOfStockCheck={handleOutOfStockCheck} />
				<AllResults
					Result="itemData"
					searchedItemQuery={searchItemQuery}
					searchedBrandQuery={searchBrandQuery}
					searchedInStockQuery={instockCheck} />
			</div>
		</>
	);
}
