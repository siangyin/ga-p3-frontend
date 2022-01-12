import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../pages/Home";




export default function ResetPassword() {

    let { token } = useParams()
    const [isValid, setValid] = useState(false);

    useEffect(() => {
        try {
            axios
                .get(`${process.env.REACT_APP_DEV_BACKEND_URL}/checktoken/${token}`,{withCredentials: true})
                .then((res) => {
                    if (res.data.message === "Valid token") {
                        setValid(true);
                    }
                    else {
                        return setValid(false)
                    }

                });
        } catch (err) {
            return err
        }
    }, []);
    if (isValid === true) {
        Swal.fire({
            title: "Enter your new password",
            input: "password",
            confirmButtonText: "Reset",
            allowOutsideClick: false,
            allowEscapeKey: false,
            preConfirm: async (password) => {
                if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
                    await axios.post(`${process.env.REACT_APP_DEV_BACKEND_URL}/resetpassword`,
                        {
                            resetToken: token,
                            password: password
                        },
                        { withCredentials: true })
                        .then(res => {
                            if (res.data.message === "Password updated Successfully") {
                                Swal.fire({
                                    icon: 'success',
                                    title: res.data.message,
                                    confirmButtonText: "OK",
                                }).then(() => {
                                    window.open("http://localhost:3000/", "_self")
                                })
                            }
                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: res.data.message,
                                    confirmButtonText: "OK",
                                }).then(() => {
                                    window.open("http://localhost:3000/", "_self")
                                })
                            }
                        })
                }
                else {
                    Swal.showValidationMessage("Password must have: Minimum eight characters, at least one letter, one number and one special character")
                }
            }

        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: "Invalid Token",
            confirmButtonText: "OK",
        }).then(() => {
            window.open("http://localhost:3000/", "_self")
        })
    }

    return (
        <>
            <Home />
        </>
    );
};

