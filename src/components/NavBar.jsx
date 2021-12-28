import { Link } from 'react-router-dom';
import logo from "../assets/images/gap3-logo01.svg";
import { FaBars } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useNavigate} from 'react-router-dom';
import axios from "axios";

export default function NavBar() {
	const userSession = useContext(AuthContext)
	let navigate = useNavigate()
	const onLogout = async (data) => {
        try{
            await axios.get("http://localhost:5000/logout", 
            { withCredentials: true })
            .then(res => {
                if(res.status===200)
				{
					console.log(res.data)
					navigate("/")
					window.location.reload()
					
				}
			
            })
        }catch(err)
        {
            console.log(err)
         
        }
     
    }

	return (
		<>
			{userSession ? <nav className="flex flex-wrap items-center justify-between p-6">
				<div className="flex items-center flex-shrink-0 mr-8">
					<Link to="/"><img src={logo} alt="logo" width="200px"></img></Link>
				</div>

				<div className="block sm:hidden">
					<button className="flex items-center px-3 py-2 border rounded border-grey-400 hover:text-blue">
						<FaBars />
					</button>
				</div>

				<div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto justify-end">
					<button

						className="block sm:inline-block sm:mt-0 text-3xl  hover:text-blue mr-5"
					>
						<Link to="Items">Items</Link>
					</button>
					<button
						href="#responsive-header"
						className="block sm:inline-block sm:mt-0 text-3xl  hover:text-blue mr-5"
					>
						Collections
					</button>
					<button
						className="block sm:inline-block sm:mt-0 text-3xl  hover:text-blue"
						onClick={()=>onLogout()}
					>
						Logout
					</button>
				</div>
			</nav> :
				<nav className="flex flex-wrap items-center justify-between p-6">
					<div className="flex items-center flex-shrink-0 mr-8">
						<Link to="/"><img src={logo} alt="logo" width="200px"></img></Link>
					</div>

					<div className="block sm:hidden">
						<button className="flex items-center px-3 py-2 border rounded border-grey-400 hover:text-blue">
							<FaBars />
						</button>
					</div>
				</nav>}


		</>


	);
}
