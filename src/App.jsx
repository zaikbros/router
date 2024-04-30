import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.jsx";
import Menu from "./Components/Menu.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import NewAgent from "./Components/NewAgent.jsx";
import AgentList from "./Components/AgentList.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/newagent" element={<NewAgent />} />
          <Route path="/agentlist" element={<AgentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;