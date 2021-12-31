import AllResults from "../components/AllResults";
import CollectionsSideBar from "../components/CollectionsSideBar";
import SubHeader from "../components/SubHeader";

export default function Collections() {
	return (
		<>
			<SubHeader title="collections" btn="New Collection" />
			<div className="flex flex-row">
				<CollectionsSideBar />
				<AllResults />
			</div>
		</>
	);
}
