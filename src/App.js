import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Collections from "./pages/Collections";
import NewCollection from "./pages/NewCollection";
import NewItem from "./pages/NewItem";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { APIurl } from "./helper/API";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const userSession = useContext(AuthContext);
	console.log(userSession);

	const [currentUser, setCurrentUser] = useState();
	// username: userSession;

	useEffect(() => {
		const getUser = async () => {
			try {
				await userSession.username;
				const url = `https://sykl-api.herokuapp.com/api/v1/members?search=${userSession.username}`;
				const res = await axios.get(url);
				setCurrentUser(res.data);
				console.log(currentUser);
			} catch (err) {
				console.log(err);
			}
		};

		getUser();
	}, []);
	return (
		<div className="App">
			<ToastContainer />
			<NavBar />
			<Routes>
				{userSession ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="/items" element={<Items />} />
						<Route path="/items/:id" element={<NewItem />} />
						<Route path="/items/new" element={<NewItem />} />
						<Route path="/collections" element={<Collections />} />
						<Route path="/collections/:id" element={<NewCollection />} />
						<Route path="/collections/new" element={<NewCollection />} />
					</>
				) : (
					<>
						<Route path="/" element={<Home />} />
					</>
				)}
				<Route path="/logout" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
