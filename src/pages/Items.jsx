import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";

export default function Items() {
	return (
		<>
			<SubHeader title="items" btn="New Item" />
			<div className="flex flex-row mx-8">
				<FilterMenu />
				<AllResults />
			</div>
		</>
	);
}
