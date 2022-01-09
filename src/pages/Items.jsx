import AllResults from "../components/AllResults";
import FilterMenu from "../components/FilterMenu";
import SubHeader from "../components/SubHeader";


export default function Items() {
	return (
		<>
			<SubHeader title="item" />
			<div className="flex flex-row">
				<FilterMenu />
				<AllResults Result="itemData"/>
			</div>
		</>
	);
}
