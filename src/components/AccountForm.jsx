import axios from "axios";
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from "react-social-login-buttons";
const Swal = require('sweetalert2')


export default function AccountForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })
    const userSession = useContext(AuthContext)
    let navigate = useNavigate();

    const onSubmitLogin = async (data) => {

        await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/login`,
            { ...data },
            { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Success!',
                        confirmButtonText: 'Click to continue',
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then(() => {
                        navigate(0)
                    })
                }
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
        const { value: email } = await Swal.fire({
            title: 'Register your Email Address',
            input: 'email',
            inputLabel: 'Email address',
            inputPlaceholder: 'Enter your email address',
            allowOutsideClick: false,
            allowEscapeKey: false
        })

        if (email) {
            await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/signup`,
                {
                    username: data.username,
                    password: data.password,
                    email: email
                },
                { withCredentials: true })
                .then(res => {
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registered and login Successfully!',
                            confirmButtonText: 'Click to continue',
                            allowOutsideClick: false,
                            allowEscapeKey: false
                        }).then(() => {
                            navigate(0)
                        })
                    }
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


    }


    const onFacebookLogin = () => {
        window.open(`${process.env.REACT_APP_DEV_BACKEND_URL}/auth/facebook`, "_self")
        Swal.fire({
            icon: 'info',
            title: 'Redirecting you to login!',
            showConfirmButton: false
        })
    }

    const onTwitterLogin = () => {
        window.open(`${process.env.REACT_APP_DEV_BACKEND_URL}/auth/twitter`, "_self")
        Swal.fire({
            icon: 'info',
            title: 'Redirecting you to login!',
            showConfirmButton: false
        })
    }

    const onGoogleLogin = () => {
        window.open(`${process.env.REACT_APP_DEV_BACKEND_URL}/auth/google`, "_self")
        Swal.fire({
            icon: 'success',
            title: 'Redirecting you to login!',
            showConfirmButton: false
        })
    }

    const onForgotPassword = async () => {
        await Swal.fire({
            title: "Enter your email",
            input: "email",
            showCancelButton: true,
            confirmButtonText: "Reset",
            preConfirm: async (searchEmail) => {
                await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/checkemail/`,
                    { email: searchEmail },
                    { withCredentials: true })
                    .then(res => {
                        if (res.data.message === "Email found") {
                            Swal.fire({
                                icon: 'success',
                                title: "Please check your email to reset your password",
                                confirmButtonText: "OK",
                            })
                        }
                        else if (res.data.message === "Email not found") {
                            Swal.fire({
                                icon: 'error',
                                title: res.data.message,
                                showConfirmButton: true
                            })
                        }
                    })


            }
        })

    }

    return (

        <div className="card flex-shrink-0 w-full max-w-sm justify-center shadow-2xl bg-base-100 md:w-1/2">
            <div className="card-body">{userSession ? `Welcome ${userSession.username} UID(${userSession._id})` :
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
                            placeholder="Password"
                            className="input input-bordered"
                            {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })}
                        />
                        {errors.password && errors.password.type === "required" && <span className="text-pink text-xs italic">This field is required</span>}
                        {errors.password && errors.password.type === "pattern" && <span className="text-pink text-xs italic">Password must have: Minimum eight characters, at least one letter, one number and one special character</span>}
                    </div>
                    <label className="label">
                        <a href="/#" className="label-text-alt" onClick={onForgotPassword}>
                            Forgot password?
                        </a>
                    </label>
                    <div className="card-actions flex space-x-16 justify-center ">
                        <button className="btn  hover:btn-primary" onClick={handleSubmit(onSubmitLogin)}>Login</button>
                        <button className="btn  hover:btn-primary" onClick={handleSubmit(onRegisterLogin)}>Register</button>
                    </div>
                    <div className="label-text text-center font-extrabold text-2xl">or</div>
                    <div className="flex flex-col">
                        <div><GoogleLoginButton onClick={onGoogleLogin} /></div>
                        <div><FacebookLoginButton onClick={onFacebookLogin} /></div>
                        <div><TwitterLoginButton onClick={onTwitterLogin} /></div>
                    </div>
                </form>}
            </div>
        </div>
    )

}
