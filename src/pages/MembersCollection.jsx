import SubHeader from "../components/SubHeader";
import { useLocation } from "react-router-dom";
import ViewCollections from "../components/ViewCollections";



export default function MembersCollection() {
    let location = useLocation()


    return (
        <>
            <SubHeader title={`${location.state.friendsgrpName} collection`} MembersPage="MembersPage" />
            <div className="flex flex-row">
                <ViewCollections
                    friendsNumMembers={location.state.friendsNumMembers}
                    friendsgrpName={location.state.friendsgrpName}
                    friendsMembers={location.state.friendsMembers}
                    friendsimgURL={location.state.friendsimgURL}
                    friendsOwnerID={location.state.ownerID} 
                    friendsGroupID={location.state.groupID}/>
            </div>
        </>
    );
}
