import React from "react";
import photo from "../assets/images/photo.svg";
const Home = () => {
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
								Share your kitchen leh! Manage your pantry inventory & track
								food expiry. Eat smarter. Save money. Waste less.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="card flex-shrink-0 w-full max-w-sm justify-center shadow-2xl bg-base-100 md:w-1/2">
				<div className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email/Username</span>
						</label>
						<input
							type="text"
							placeholder="Email/Username"
							className="input input-bordered"
						></input>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="text"
							placeholder="password"
							className="input input-bordered"
						></input>
						<label className="label">
							<a href="#testing" className="label-text-alt">
								Forgot password?
							</a>
						</label>
					</div>

					<div className="card-actions">
						<button className="btn  hover:btn-primary">Login</button>
						<button className="btn  hover:btn-primary">Register</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
