import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const ViewCollections = (props) => {
    console.log(props)

    const [getItemsNumber, setgetItemsNumber] = useState("");

	const getItemsResult = async () => {
		await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/items?grpID=${props.friendsGroupID}`, { withCredentials: true })
			.then(res => {
				if (res.status === 200) {
					setgetItemsNumber(res.data.data.length)
				}
			})
	}

	useEffect(() => {
		getItemsResult()
	}, []);

    console.log(getItemsNumber)

    let mapMembersID = props.friendsMembers.map((data) => {
        return <input
            type="text"
            name="members"
            defaultValue={data}
            disabled
            className="sm:w-1/2 w-full place-self-center input input-bordered"
        ></input>
    })


    return (
        <>
            <div className="card-body">
                <form className="form-control flex flex-wrap justify-center mt-6 space-y-2">
                    <label
                        type="text"
                        htmlFor="grpName"
                        className="sm:w-1/2 w-full place-self-center"
                    >
                        Collection Name
                    </label>
                    <input
                        type="text"
                        name="grpName"
                        value={props.friendsgrpName}
                        disabled
                        className="sm:w-1/2 w-full place-self-center input input-bordered"
                    ></input>
                    <label
                        type="text"
                        htmlFor="ownerID"
                        className="sm:w-1/2 w-full place-self-center"
                    >
                        OwnerID
                    </label>
                    <input
                        type="text"
                        name="OwnerID"
                        className="sm:w-1/2 w-full place-self-center input input-bordered"
                        value={props.friendsOwnerID}
                        disabled="true"
                    ></input>

                    <label
                        type="text"
                        htmlFor="member"
                        className="sm:w-1/2 w-full place-self-center"
                    >
                        Members
                    </label>
                    {mapMembersID}
                    <label
                        type="text"
                        htmlFor="numItems"
                        className="sm:w-1/2 w-full place-self-center"
                    >
                        Number of Items
                    </label>
                    <input
                        type="text"
                        name="OwnerID"
                        className="sm:w-1/2 w-full place-self-center input input-bordered"
                        value={getItemsNumber}
                        disabled="true"
                    ></input>

                    <div className="flex flex-row place-self-center space-x-2">
                       <Link to ="/collections"> <button
                            className="btn btn-outline btn-primary mt-6"
                        >
                            Back
                        </button></Link>
                    </div>

                    


                    <div className="w-6/12 sm:w-4/12 px-4 place-self-center">
                        <img
                            src={props.friendsimgURL}
                            alt="group-img"
                            className="m-6 shadow-lg rounded max-w-full h-auto align-middle border-none "
                        ></img>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ViewCollections;
