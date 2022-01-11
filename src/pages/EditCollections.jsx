import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const EditCollections = () => {
    let location = useLocation()
    const [getSingleGroupDetails, setgetSingleGroupDetails] = useState([]);
    let navigate = useNavigate();
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
  

    const singleGroupResults = async() =>
    {
        await axios.get(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups/${location.state.GroupsID}`,{withCredentials: true})
        .then(res=>
            {
                setgetSingleGroupDetails(res.data.data)
            })
    }


    useEffect(() => {
        singleGroupResults()
       
        
    }, [getSingleGroupDetails]);  

    console.log(getSingleGroupDetails)
    getSingleGroupDetails.members.map((data, index) => {
        if(data.members !== data.ownerID)
        {
            console.log(data.members)
        }
    })


	const onSubmitEditedData = async (data) => {

		const members = await data.members;
		const newmembers = await members.split(',');
	

		await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/api/v1/groups/${location.state.GroupsID}`, {grpName: data.grpName, imgUrl: data.imgUrl, members: newmembers, ownerID: localStorage.getItem('userId')}, {withCredentials: true})
		.then(res => {
			
			if (res.status===200) {
				console.log("toast now");
				toast.success('Successfully Edited!', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				navigate('/collections')
			}
		}).catch(err=> {
			console.log(err);
			toast.error(err.response.data.status, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		})
	}

	
    return (
        <>
        <div className="card-body">
            <div className="flex flex-row mx-8 ">
                <h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
                    Edit {getSingleGroupDetails.grpName}
                </h1>
            </div>
            <form className="form-control flex flex-wrap justify-center mt-6 space-y-2" onSubmit={e => e.preventDefault}>
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
                    placeholder="Collection Name"
                    defaultValue={getSingleGroupDetails.grpName}
                    className="sm:w-1/2 w-full place-self-center input input-bordered"
                    {...register('grpName', {required: true, maxLength: 50})}
                ></input>
                {errors.grpName && errors.grpName.type === "required" && <span className=" text-pink text-xs italic">This field is required</span>}

                <label
                    type="text"
                    htmlFor="imgUrl"
                    className="sm:w-1/2 w-full place-self-center"
                >
                    Image's url
                </label>
                <input
                    type="text"
                    name="imgUrl"
                    placeholder="Image URL"
                    defaultValue={getSingleGroupDetails.imgUrl}
                    className="sm:w-1/2 w-full place-self-center input input-bordered"
                    {...register('imgUrl')}
                ></input>

                <label
                    type="text"
                    htmlFor="member"
                    className="sm:w-1/2 w-full place-self-center"
                >
                    Enter UID
                </label>
                <input
                    type="text"
                    name="members"
                    placeholder="eg: John21, Dr.Stranger, Ironman"
                    defaultValue={getSingleGroupDetails.imgUrl}
                    className="sm:w-1/2 w-full place-self-center input input-bordered"
                    {...register('members')}
                ></input>
                
                    <div className="flex flex-row place-self-center space-x-2">
                        <button
                            className="btn btn-outline btn-primary mt-6"
                            onClick={handleSubmit(onSubmitEditedData)}
                        >
                            Save & go to List
                        </button>
                    </div>
                

                <div className="w-6/12 sm:w-4/12 px-4 place-self-center">
                    <img
                        src={getSingleGroupDetails.imgUrl}
                        alt="group-img"
                        className="m-6 shadow-lg rounded max-w-full h-auto align-middle border-none "
                    ></img>
                </div>
            </form>
        </div>
    </>
    );
};

export default EditCollections;
