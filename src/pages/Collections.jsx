import AllResults from "../components/AllResults";
import CollectionsSideBar from "../components/CollectionsSideBar";
import SubHeader from "../components/SubHeader";

export default function Collections() {
	return (
		<>
			<SubHeader title="collection"/>
			<div className="flex flex-row">
				<CollectionsSideBar />
				<AllResults />
			</div>
		</>
	);
}
