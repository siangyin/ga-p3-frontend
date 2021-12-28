import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";
import { useContext } from 'react';
import { AuthContext } from "./components/contexts/AuthContext";


function App() {
	const userSession = useContext(AuthContext)
	return (
		<div className="App">
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
