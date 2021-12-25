// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<Footer/>
		</div>
	);
}

export default App;
