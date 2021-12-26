import React from "react";
import photo from "../assets/images/photo.svg";
import AccountForm from "../components/AccountForm";

export default function Home(){
	return (
		<div className="hero min-h-screen bg-base-200 flex flex-wrap justify-center">
			<div className="flex-col justify-center hero-content lg:flex-row md:w-1/2">
				<div className="text-center lg:text-left p-5">
					<img src={photo} alt="woman-photos" className="hero min-h-fit"></img>

					<div className="justify-center">
						<div className="max-w-md">
							<h1 className="text-5xl font-bold">Hello</h1>
							<h2 className="text-3xl font-bold">Share your kitchen leh!</h2>
							<p className="mb-5">
								Manage your pantry inventory & track food expiry. Eat smarter.
								Save money. Waste less.
							</p>
						</div>
					</div>
				</div>
			</div>
			<AccountForm/>
		</div>
	
	);
};
