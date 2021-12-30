import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	const userSession = useContext(AuthContext)
	console.log(userSession)
	return (
		<div className="App">
			<ToastContainer/>
			<NavBar />
			<Routes>
				{userSession ?
					<>
						<Route path="/" element={<Home />} />
						<Route path="/items" element={<Items />} />
					</>
					:
					<>
						<Route path="/" element={<Home />} />
					</>
				}
			<Route path="/logout" element={<Home />} />	
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
