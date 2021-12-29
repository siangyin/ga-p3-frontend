import AllResults from "../components/AllResults";
import CollectionsSideBar from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";

export default function Collections() {
	return (
		<>
			<SubHeader title="collections" btn="New Collection" />
			<div className="flex flex-row mx-8">
				<CollectionsSideBar />
				<AllResults />
			</div>
		</>
	);
}
