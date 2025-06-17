// Main App component: Defines all routes for the application
import { Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Home from "./Home";
import Project from "./Project";
import About from "./About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
