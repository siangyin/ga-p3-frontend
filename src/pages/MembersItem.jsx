import AllResults from "../components/AllResults";
import SubHeader from "../components/SubHeader";
import { useLocation } from "react-router-dom";



export default function MembersItem() {
    let location = useLocation()


    return (
        <>
            <SubHeader title={`${location.state.grpName} item`} MembersPage="MembersPage" />
            <div className="flex flex-row">
                <AllResults grpID={location.state.grpID} />
            </div>
        </>
    );
}
