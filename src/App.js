// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
		</div>
	);
}

export default App;
