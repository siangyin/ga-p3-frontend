import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

export default function AccountForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    let navigate = useNavigate()
    const userSession = useContext(AuthContext)

    const onSubmitLogin = async (data) => {
        try{
            await axios.post("http://localhost:5000/login", 
            { ...data }, 
            { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate(0)
            })
        }catch(err)
        {
            console.log(err)
         
        }
     
    }


    const onRegisterLogin = async (data) =>
    {
        try{
            await axios.post("http://localhost:5000/signup",
            {...data},
            {withCredentials: true})
            .then(res => {
                console.log(res.data)
                navigate(0)
            })
        }catch(err)
        {
            console.log(err)
        }
    }



    return (

        <div className="card flex-shrink-0 w-full max-w-sm justify-center shadow-2xl bg-base-100 md:w-1/2">
            <div className="card-body">{userSession ? `Welcome ${userSession.username}`:
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-bordered"
                            {...register('username', { required: true })}
                        />
                        {errors.username && <p className="text-pink text-xs italic">This field is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="text"
                            placeholder="password"
                            className="input input-bordered"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p className="text-pink text-xs italic">This field is required</p>}
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