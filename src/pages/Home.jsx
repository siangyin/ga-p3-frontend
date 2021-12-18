import React from "react";

const Home = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="flex-col justify-center hero-content lg:flex-row">
				<div className="text-center lg:text-left">
					<h1 className="mb-5 text-5xl font-bold">Helloooooo</h1>
					<p className="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
								<a href="#" className="label-text-alt">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-3">
							<input
								type="button"
								value="Login"
								className="btn btn-primary"
							></input>
						</div>
						<div className="form-control mt-3">
							<input
								type="button"
								value="Register"
								className="btn btn-primary"
							></input>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
