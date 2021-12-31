import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";

export default function Items() {
	return (
		<>
			<SubHeader title="items" btn="New Item" />
			<div className="flex flex-row">
				<FilterMenu />
				<AllResults />
			</div>
		</>
	);
}
