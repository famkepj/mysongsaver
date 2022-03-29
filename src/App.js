import "./App.css";
import SongOverview from "./components/SongOverview";
import React from "react";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Songsaver App</h1>
      <Router>
        <div className="nav">
          <Link to="/">SongOverview</Link>
          <Link to="/components/AboutUs">About Us</Link>
        </div>

        <Routes>
          <Route path="/" element={<SongOverview />}></Route>
          <Route path="/components/AboutUs" element={<AboutUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
