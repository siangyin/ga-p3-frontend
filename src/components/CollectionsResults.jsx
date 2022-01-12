import axios from "axios";
import { useEffect, useState } from "react";
import CollectionsSglCard from "./CollectionsSglCard";




const CollectionsResults = (props) => {
    console.log(props)
    const [getUserGroup, setgetUserGroup] = useState([]);

    const getGroups = async() =>
    {
        await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups?ownerID=${localStorage.getItem('userId')}`,{withCredentials: true})
        .then(res=>
            {
                setgetUserGroup(res.data.data)
            })
    }


    useEffect(() => {
        getGroups()
       
    }, []);

    const getGroupsResult = getUserGroup.map((data, index) =>
    {  
        return <CollectionsSglCard GroupName={data.grpName} imgUrl={data.imgUrl} numMembers={data.members.length} grpID={data._id} members={data.members} ownerID={data.ownerID} key={index}/>
    })


	return (
		<>
         		{props.Result === "CollectionData" ? getGroupsResult : 
                 <CollectionsSglCard GroupName={props.firendsgrpName} imgUrl={props.friendsimgURL} numMembers={props.friendsNumMembers} members={props.friendsMembers} data="CollectionMemberDetails"/>}
        </>
		
	);
};

export default CollectionsResults;
