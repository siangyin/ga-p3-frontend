import React from "react";
import photo from "../assets/images/photo.svg";
import AccountForm from "../components/AccountForm";

export default function Home() {
	return (
		<div className="hero flex flex-wrap justify-center container sm:mt-20">
			<div className="flex-col justify-center hero-content lg:flex-row md:w-1/2">
				<div className="place-items-center p-5">
					<img
						src={photo}
						alt="woman-photos"
						className="hero sm:h-80 m-5"
					></img>

					<div className="max-w-md">
						<h1 className="md:text-3xl sm:text-4xl text-2xl font-bold">
							Share your kitchen leh!
						</h1>
						<p className="mb-5 sm:text-xl md:text-lg text-base">
							Manage your pantry inventory & track food expiry. Eat smarter:
							Save money. Waste less.
						</p>
					</div>
				</div>
			</div>
			<AccountForm />
		</div>

	);
}
