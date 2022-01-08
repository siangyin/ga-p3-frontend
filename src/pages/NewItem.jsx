import React from "react";
import SubHeader from "../components/SubHeader";

const NewItem = () => {
	return (
		<>
			<div className="card-body">
				<div className="flex flex-row mx-8">
					<h1 className="text-2xl font-semibold text-primary w-1/2 capitalize">
						New Item
					</h1>
				</div>
				<form className="form-control flex flex-wrap mt-6">
					<input
						type="text"
						name="name"
						placeholder="Product Name"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="text"
						name="brand"
						placeholder="Product Brand"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="date"
						name="expiryDate"
						className="input input-bordered mb-3  sm:w-1/2 w-full  place-self-center"
					></input>

					<input
						type="number"
						id="quantity"
						name="qty"
						value="0"
						min="0"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<select
						className="select select-bordered mb-3 sm:w-1/2 w-full place-self-center"
						name="grpName"
					>
						<option disabled="disabled" selected="selected">
							Collection
						</option>
						<option>Personal</option>
						<option>Home</option>
						<option>Office</option>
					</select>

					<input
						type="text"
						name="imgUrl"
						placeholder="Product Image URL"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<div className="p-6 place-self-center">
						<div className="form-control">
							<label className="cursor-pointer label">
								<span className="label-text mr-5">Add to Favourite List</span>
								<input
									type="checkbox"
									checked="checked"
									className="toggle"
								></input>
							</label>
						</div>
					</div>

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

export default NewItem;
