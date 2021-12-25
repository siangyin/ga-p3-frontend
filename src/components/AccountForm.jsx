export default function AccountForm()
{
    return(
        
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
    )
}