import axios from "axios";
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';


export default function AccountForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    const userSession = useContext(AuthContext)


    const onSubmitLogin = async (data) => {

        await axios.post("http://localhost:5000/login",
            { ...data },
            { withCredentials: true })
            .then(res => {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });

                setTimeout(() => window.location.reload(), 1000)

            }).catch(err => {
                if (err) {
                    toast(err.response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    })
                }
            })


    }


    const onRegisterLogin = async (data) => {

        await axios.post("http://localhost:5000/signup",
            { ...data },
            { withCredentials: true })
            .then(res => {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });

                setTimeout(() => window.location.reload(), 1000)
            }).catch(err => {
                if (err) {
                    toast(err.response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    })
                }
            })


    }



    return (

        <div className="card flex-shrink-0 w-full max-w-sm justify-center shadow-2xl bg-base-100 md:w-1/2">
            <div className="card-body">{userSession ? `Welcome ${userSession.username}` :
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-bordered"
                            {...register('username', { required: true, maxLength: 20 })}
                        />
                        {errors.username && errors.username.type === "required" && <span className="text-pink text-xs italic">This field is required</span>}
                        {errors.username && errors.username.type === "maxLength" && <span className="text-pink text-xs italic">Minimum 1-20 characters</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}
                        />
                        {errors.password && errors.password.type === "required" && <span className="text-pink text-xs italic">This field is required</span>}
                        {errors.password && errors.password.type === "pattern" && <span className="text-pink text-xs italic">Password must have: Minimum eight characters, at least one letter, one number and one special character</span>}

                        <label className="label">
                            <a href="#testing" className="label-text-alt">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="card-actions">
                        <button className="btn  hover:btn-primary" onClick={handleSubmit(onSubmitLogin)}>Login</button>
                        <button className="btn  hover:btn-primary" onClick={handleSubmit(onRegisterLogin)}>Register</button>
                    </div>
                </form>}
            </div>
        </div>
    )
}