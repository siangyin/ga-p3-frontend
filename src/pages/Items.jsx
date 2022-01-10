import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';


export default function Items() {
	const [searchItemQuery, setsearchItemQuery] = useState("");
	const [searchBrandQuery, setsearchBrandQuery] = useState("");

	const handleItemSearch = (searchData) =>
	{
		if(searchBrandQuery)
		{
		setsearchBrandQuery("")
		setsearchItemQuery(searchData)
		}
	
		setsearchItemQuery(searchData)
		
	}

	const handleBrandSearch = (searchData) =>
	{
		if(searchItemQuery)
		{
		setsearchItemQuery("")
		setsearchBrandQuery(searchData)
		}
		setsearchBrandQuery(searchData)
	}

	return (
		<>
			<SubHeader title="item" />
			<div className="flex flex-row">
				<FilterMenu handleItemSearch={handleItemSearch} handleBrandSearch={handleBrandSearch}/>
				<AllResults Result="itemData" searchedItemQuery={searchItemQuery} searchedBrandQuery={searchBrandQuery}/>
			</div>
		</>
	);
}
