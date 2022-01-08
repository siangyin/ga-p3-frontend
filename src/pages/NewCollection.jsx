import { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";
import { FaUsers, FaTrash, FaPen } from "react-icons/fa";
import { APIurl } from "../helper/API";
import axios from "axios";

const NewCollection = () => {
	const [isDisableSubmitBtn, setIsDisableSubmitBtn] = useState(false);

	const [grpMembers, setGrpMembers] = useState();
	const [grpDb, setGrpDb] = useState({
		grpName: "",
		imgUrl: "",
		members: "",
	});

	const [ownerDb, setOwnerDb] = useState();

	function removeItem(id) {
		setGrpMembers(grpMembers.filter((item) => item.id !== id));
	}

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setGrpDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		const membersArr = grpDb.members.split(",");
		setGrpDb((prevState) => ({
			...prevState,
			members: membersArr,
		}));
		console.log(grpDb);
	}

	useEffect(() => {
		const abortCont = new AbortController();

		const getUser = async () => {
			const url = APIurl + "members?search=YippeeYaya";

			try {
				const response = await axios.get(url, { signal: abortCont.signal });
				const objArr = response.data;
				setOwnerDb(objArr);
				console.log(objArr);
				setGrpDb((prevState) => ({ ...prevState, ownerID: objArr.data._id }));
			} catch (error) {
				console.log(error);
			}
		};

		getUser();

		return () => {
			abortCont.abort();
		};
	}, []);

	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8 ">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Collection
					</h1>
				</div>
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
						placeholder="Collection Name"
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						value={grpMembers}
						onChange={(e) => {
							setGrpMembers(e.target.value);
						}}
					></input>

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
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						value={grpDb.imgUrl}
						onChange={handleChange}
					></input>

					<label
						type="text"
						htmlFor="member"
						className="sm:w-1/2 w-full place-self-center"
					>
						Member's userid /username/ email
					</label>
					<input
						type="text"
						name="members"
						placeholder="eg: John21, Dr.Stranger, Ironman"
						className="sm:w-1/2 w-full place-self-center input input-bordered"
						value={grpDb.members}
						onChange={handleChange}
					></input>

					{/* next sample */}

					{/* <ul className="sm:w-1/2 w-full place-self-center rounded-lg border border-gray-light bg-base-200">
						<li className="inline-flex relative items-center py-2 px-4 w-full font-medium rounded-t-lg border-b border-gray-light">
							<span>Members</span>
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light"
						>
							<span>Yippee</span>{" "}
							<em className="text-sm text-primary">Owner</em>
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light"
						>
							<span>YippeYaya</span>
							<FaTrash />
						</li>
						<li
							type="button"
							className="flex justify-between relative items-center py-2 px-4 w-full font-small border-b border-gray-light rounded-b-lg "
						>
							<span>Yippyyyy</span>
							<FaTrash />
						</li>
					</ul> */}

					{/* buttons group */}

					{isDisableSubmitBtn ? (
						<div className="flex flex-row place-self-center space-x-2">
							<button disabled className="btn btn-outline btn-primary mt-6">
								Save & go to List
							</button>

							<button disabled className="btn btn-outline btn-primary mt-6">
								Save & Add another
							</button>

							<button disabled className="btn btn-outline btn-primary mt-6">
								Clear/ Delete
							</button>
						</div>
					) : (
						<div className="flex flex-row place-self-center space-x-2">
							<button
								className="btn btn-outline btn-primary mt-6"
								onClick={handleSubmit}
							>
								Save & go to List
							</button>

							<button className="btn btn-outline btn-primary mt-6">
								Save & Add another
							</button>

							<button className="btn btn-outline btn-primary mt-6">
								Clear/ Delete
							</button>
						</div>
					)}

					<div className="w-6/12 sm:w-4/12 px-4 place-self-center">
						<img
							src="https://www.gemkom.com.tr/wp-content/uploads/2020/02/NO_IMG_600x600-1.png"
							alt="group-img"
							className="m-6 shadow-lg rounded max-w-full h-auto align-middle border-none "
						></img>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewCollection;
