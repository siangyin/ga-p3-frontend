import axios from "axios";
import { useEffect, useState } from "react";
import CollectionsSglCard from "./CollectionsSglCard";




const CollectionsResults = (props) => {
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
        console.log(data.members.length)
        return <CollectionsSglCard GroupName={data.grpName} imgUrl={data.imgUrl} numMembers={data.members.length} grpID={data._id} key={index}/>
    })
    console.log(getUserGroup)

	return (
		<>
            {getGroupsResult}
        </>
		
	);
};

export default CollectionsResults;
