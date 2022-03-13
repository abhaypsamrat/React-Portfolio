import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    
      <Router>
      <Header />
        <Routes>   
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
      <div className="footer">
        <h6>
        Abhay Pratap Samrat © 2022
        </h6>
      </div>
    </div>
  );
}
export default App;
