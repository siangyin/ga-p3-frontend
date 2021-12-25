import {Route, Routes, Navigate} from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>	
				<Route path="/" element={<Home />}/>
				<Route path="/items" element={<Items/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
