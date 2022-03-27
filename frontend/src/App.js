import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Sign from "./screens/sign";
import Home from "./screens/home";
import Profile from "./screens/profile";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
