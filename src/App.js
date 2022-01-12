import { Route, Routes, Navigate } from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Collections from "./pages/Collections";
import NewCollection from "./pages/NewCollection";
import NewItem from "./pages/NewItem";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./components/ResetPassword";
import EditItem from "./pages/EditItem";
import MembersItem from "./pages/MembersItem";
import EditCollections from "./pages/EditCollections";
import MembersCollection from "./pages/MembersCollection";

function App() {
	const userSession = useContext(AuthContext);

	return (
		<div className="App">
			<ToastContainer />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				{userSession ? (
					<>
						<Route path="/" element={<Home />} />
						<Route path="/items" element={<Items />} />
						<Route path="/items/new" element={<NewItem />} />
						<Route path="/items/edit" element={<EditItem />} />
						<Route path="/items/*" element={<MembersItem />} />
						<Route path="/collections" element={<Collections />} />
						<Route path="/collections/new" element={<NewCollection />} />
						<Route path="/collections/edit" element={<EditCollections />} />
						<Route path="/collections/*" element={<MembersCollection />} />
						<Route path="/logout" element={<Home />} />
						<Route path="*" element={<Navigate to="/" />} />
					</>
				) : (
					<>
						<Route path="*" element={<Navigate to="/" />} />
						<Route path="/reset/:token" element={<ResetPassword />} />
					</>
				)}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;