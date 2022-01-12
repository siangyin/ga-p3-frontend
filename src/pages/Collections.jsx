import CollectionsResults from "../components/CollectionsResults";
import CollectionsSideBar from "../components/CollectionsSideBar";
import SubHeader from "../components/SubHeader";
import { useState } from 'react';

export default function Collections() {
	const [searchedCollectionsQuery, setsearchedCollectionsQuery] = useState("");
	const handleCollectionSearch = (searchData) => {

		setsearchedCollectionsQuery(searchData)

	}
	return (
		<>
			<SubHeader title="collection" />
			<div className="flex flex-row">
				<CollectionsSideBar handleCollectionSearch={handleCollectionSearch} />
				<CollectionsResults searchedCollectionsQuery={searchedCollectionsQuery} />
			</div>
		</>
	);
}
