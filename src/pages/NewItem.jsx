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
						name="prodName"
						placeholder="Product Name"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="text"
						name="prodBrand"
						placeholder="Product Brand"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<input
						type="date"
						name="prodExpiryDate"
						className="input input-bordered mb-3  sm:w-1/2 w-full  place-self-center"
					></input>

					<input
						type="number"
						id="quantity"
						name="QTY"
						value="0"
						min="0"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<select class="select select-bordered mb-3 sm:w-1/2 w-full place-self-center">
						<option disabled="disabled" selected="selected">
							Collection
						</option>
						<option>Personal</option>
						<option>Home</option>
						<option>Office</option>
					</select>

					<input
						type="text"
						name="prodIMG"
						placeholder="Product Image URL"
						className="input input-bordered mb-3  sm:w-1/2 w-full place-self-center"
					></input>

					<div class="p-6 place-self-center">
						<div class="form-control">
							<label class="cursor-pointer label">
								<span class="label-text mr-5">Add to Favourite List</span>
								<input type="checkbox" checked="checked" class="toggle"></input>
							</label>
						</div>
					</div>

					<div class="flex flex-row place-self-center space-x-4">
						<button class="btn btn-outline btn-primary">
							Save & go to List
						</button>

						<button class="btn btn-outline btn-primary">
							Save & Add another
						</button>

						<button class="btn btn-outline btn-primary">Clear/ Delete</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default NewItem;
