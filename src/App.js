import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Collections from "./pages/Collections";
import NewCollection from "./pages/NewCollection";
import NewItem from "./pages/NewItem";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import { APIurl } from "./helper/API";
import axios from "axios";

function App() {
	const userSession = useContext(AuthContext);
	console.log(userSession);

	const [currentUser, setCurrentUser] = useState(userSession);
	// username: userSession;

	// const getUser = async (url) => {
	// 	try {
	// 		await userSession.username;
	// 		const res = await axios.get(url);
	// 		console.log(res);
	// 		setCurrentUser(res.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// getUser(`https://sykl-api.herokuapp.com/api/v1/members?search=YippeeYaya`);
	// console.log(currentUser);
	// useEffect(() => {
		
	// }, [currentUser]);
	return (
		<div className="App">
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
