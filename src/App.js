import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Collections from "./pages/Collections";
import { useContext } from "react";
import { AuthContext } from "./components/contexts/AuthContext";
import NewCollection from "./pages/NewCollection";
import NewItem from "./pages/NewItem";

function App() {
	const userSession = useContext(AuthContext);
	console.log(userSession);
	return (
		<div className="App">
			<NavBar />
			<Routes>
				{userSession ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="/items" element={<Items />} />
						<Route path="/collections" element={<Collections />} />
						<Route path="/collections/new" element={<NewCollection />} />
						<Route path="/items/new" element={<NewItem />} />
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
