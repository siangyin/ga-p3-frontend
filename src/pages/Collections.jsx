import CollectionsResults from "../components/CollectionsResults";
import CollectionsSideBar from "../components/CollectionsSideBar";
import SubHeader from "../components/SubHeader";

export default function Collections() {
	return (
		<>
			<SubHeader title="collection"/>
			<div className="flex flex-row">
				<CollectionsSideBar />
				<CollectionsResults Result="CollectionData"/>
			</div>
		</>
	);
}
