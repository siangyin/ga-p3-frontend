import React from "react";
import SubHeader from "../components/SubHeader";
import { FaUsers, FaTrash, FaPen } from "react-icons/fa";

const NewCollection = () => {
	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Collection
					</h1>
				</div>
				<form className="form-control flex flex-wrap mt-6 w-3/6 place-self-center space-y-4">
					<input
						type="text"
						name="grpName"
						placeholder="Collection Name"
						className="input input-bordered"
					></input>

					<input
						type="text"
						name="imgUrl"
						placeholder="Image URL"
						className="input input-bordered"
					></input>

					<input
						type="text"
						name="member"
						placeholder="Invite member's username"
						className="input input-bordered"
					></input>

					{/* next sample */}

					<ul className="place-self-center w-full rounded-lg border border-gray-light bg-base-200">
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
					</ul>

					<div className="flex flex-row place-self-center space-x-4">
						<button className="btn btn-outline btn-primary mt-6">
							Save & go to List
						</button>

						<button className="btn btn-outline btn-primary mt-6">
							Save & Add another
						</button>

						<button className="btn btn-outline btn-primary mt-6">
							Clear/ Delete
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewCollection;
