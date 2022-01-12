import CollectionsResults from "../components/CollectionsResults";
import SubHeader from "../components/SubHeader";
import { useLocation } from "react-router-dom";



export default function MembersCollection() {
    let location = useLocation()


    return (
    	<>
			<SubHeader title= {`${location.state.friendsgrpName} collection`} MembersPage="MembersPage"/>
			<div className="flex flex-row">
				<CollectionsResults 
                friendsNumMembers={location.state.friendsNumMembers}
                friendsgrpName={location.state.friendsgrpName}
                friendsMembers={location.state.friendsMembers}
                friendsimgURL={location.state.friendsimgURL}
                 />
			</div>
		</>
    );
}
