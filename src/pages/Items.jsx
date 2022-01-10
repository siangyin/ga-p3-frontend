import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';


export default function Items() {
	const [searchQuery, setsearchQuery] = useState("");

	const handleSearch = (searchData) =>
	{
		setsearchQuery(searchData)
	}

	return (
		<>
			<SubHeader title="item" />
			<div className="flex flex-row">
				<FilterMenu handleSearch={handleSearch}/>
				<AllResults Result="itemData"/>
			</div>
		</>
	);
}
