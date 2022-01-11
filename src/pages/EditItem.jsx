import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const EditItem = () => {
    const [listCollections, setlistCollections] = useState([]);
    const [getItemDetails, setItemDetails] = useState([]);
    const [selectedCollection, setselectedCollection] = useState();
    const { register, handleSubmit, reset } = useForm()
    let navigate = useNavigate();
    let location = useLocation()

    const getCollecitons = async () => {
        await axios.get(`http://localhost:5000/api/v1/groups?ownerID=${localStorage.getItem('userId')}`, { withCredentials: true })
            .then(res => {
                setlistCollections(res.data.data)
            })
    }

    const getSelectedItemData = async () => {
        await axios.get(`http://localhost:5000/api/v1/items/${location.state.itemsID}`, { withCredentials: true })
            .then(res => {
                setItemDetails(res.data.data)
                reset({ keepDirty: true })
            })
    }


    useEffect(() => {
        getCollecitons()
        getSelectedItemData()
    }, [reset]);

    let expiryDate = moment(getItemDetails.expiryDate).format('YYYY-MM-DD')

    const options = listCollections.map((data, index) => {
        return <option key={index} value={data._id} >{data.grpName}</option>
    })

    const handleChange = (e) => {
        setselectedCollection(e.target.value)
    }

    const onCreate = async (data) => {
        await axios.patch(`http://localhost:5000/api/v1/items/${location.state.itemsID}`, {
            name: data.name,
            brand: data.brand,
            expiryDate: data.expiryDate,
            fav: data.fav,
            imgUrl: data.imgUrl,
            qty: data.qty,
            grpID: selectedCollection,
            createdBy: localStorage.getItem('userId')

        }, { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    toast.success('Successfully created!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate('/items')
                }

            }).catch(err => {
                toast.error(err.response.data.message, {
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
                <div className="flex flex-row mx-8">
                    <h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
                        Edit Item
                    </h1>
                </div>
                <div className="grid place-items-center">
                    <img
                        src={getItemDetails.imgUrl}
                        alt="item"
                        className="object-center object-cover"
                        width= '500'
                    ></img>
                </div>
            <form className="form-control flex flex-wrap mt-6" onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    defaultValue={getItemDetails.name}
                    className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
                    {...register('name', { required: true, })}

                ></input>

                <input
                    type="text"
                    defaultValue={getItemDetails.brand}
                    className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
                    {...register('brand', { required: true })}
                ></input>

                <input
                    type="date"
                    defaultValue={expiryDate}
                    className="input input-bordered mb-3  sm:w-1/2 w-full  place-self-center"
                    {...register('expiryDate', { required: true })}
                ></input>

                <input
                    type="number"
                    id="quantity"
                    defaultValue={getItemDetails.qty}
                    min="0"
                    className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
                    {...register('qty')}
                ></input>

                <select
                    className="select select-bordered mb-3 sm:w-1/2 w-full place-self-center"
                    name="grpName" value={selectedCollection} onChange={handleChange} defaultValue="Collection"
                >
                    <option disabled="disabled" value="Collection">
                        Select Collection
                    </option>
                    {options}
                </select>

                <input
                    type="text"
                    placeholder="Product Image URL"
                    defaultValue={getItemDetails.imgUrl}
                    className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
                    {...register('imgUrl')}
                ></input>

                <div className="p-6 place-self-center">
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text mr-5">Add to Favourite List</span>
                            <input
                                type="checkbox"
                                className="toggle"
                                defaultChecked={getItemDetails.fav}
                                {...register('fav')}
                            ></input>
                        </label>
                    </div>
                </div>

                <div className="flex flex-row place-self-center space-x-4">
                    <button className="btn btn-outline btn-primary" onClick={handleSubmit(onCreate)}>
                        Save & go to List
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default EditItem;
