import React from "react";
import SubHeader from "../components/SubHeader";
import { FaUsers } from "react-icons/fa";

const NewCollection = () => {
	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Collection
					</h1>
				</div>
				<form className="form-control flex flex-wrap mt-6">
					<input
						type="text"
						name="grpName"
						placeholder="Collection Name"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="text"
						name="grpIMG"
						placeholder="Image URL"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="text"
						name="member"
						placeholder="Invite member's username"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>
					<label className="flex flex-inline  place-self-center">
						<FaUsers /> <span className="pl-1">Members:</span>
					</label>
					<ul className="space-y-1 mb-6 place-self-center">
						<li>Weilun</li>
						<li>Hakeym</li>
						<li>SiangYin</li>
					</ul>

					<div className="flex flex-row place-self-center space-x-4">
						<button className="btn btn-outline btn-primary">
							Save & go to List
						</button>

						<button className="btn btn-outline btn-primary">
							Save & Add another
						</button>

						<button className="btn btn-outline btn-primary">
							Clear/ Delete
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewCollection;
