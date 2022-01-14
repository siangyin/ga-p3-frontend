import { Link } from "react-router-dom";
import logo from "../assets/images/gap3-logo01.svg";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

export default function NavBar() {
	const userSession = useContext(AuthContext);
	let navigate = useNavigate();
	const [showLinks, setShowLinks] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		setWindowWidth(window.innerWidth);
		if (window.innerWidth > 640) {
			setShowLinks(true);
		} else {
			setShowLinks(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [windowWidth]);

	const onLogout = async () => {
		try {
			await axios
				.delete(`${process.env.REACT_APP_DEV_BACKEND_URL}/logout`, {
					withCredentials: true,
				})
				.then((res) => {
					if (res.status === 200) {
						console.log(res.data);
						navigate("/");
						toast.success(res.data.message, {
							position: "top-right",
							autoClose: false,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: false,
							draggable: false,
							progress: undefined,
						});

						setTimeout(() => window.location.reload(), 1000);
					}
				});
		} catch (err) {
			toast(err.response.data.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
			});
		}
	};

	if (userSession.username) {
		return (
			<nav className="flex flex-wrap items-center justify-between p-6 shadow-md">
				<div className="flex items-center flex-shrink-0 mr-8 mb-2">
					<Link to="/">
						<img src={logo} alt="logo" width="200px"></img>
					</Link>
				</div>

				<div className="block sm:hidden">
					<button
						className="flex items-center px-3 py-2 border rounded border-grey-400 hover:text-primary"
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>

				{showLinks && (
					<div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto justify-end">
						<button className="block sm:inline-block sm:mt-0 text-2xl  hover:text-primary mr-5">
							<Link to="items">Items</Link>
						</button>
						<button className="block sm:inline-block sm:mt-0 text-2xl  hover:text-primary mr-5">
							<Link to="collections">Collections</Link>
						</button>
						<button
							className="block sm:inline-block sm:mt-0 text-2xl  hover:text-primary"
							onClick={() => onLogout()}
						>
							Logout
						</button>
					</div>
				)}
			</nav>
		);
	}
	return (
		<nav className="flex flex-wrap items-center justify-between p-6 shadow-md">
			<div className="flex items-center flex-shrink-0 mr-8">
				<Link to="/">
					<img src={logo} alt="logo" width="200px"></img>
				</Link>
			</div>
		</nav>
	);
}
