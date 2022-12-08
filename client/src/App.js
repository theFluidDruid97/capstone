import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddMember from "./components/AddMember.js";
import AddCert from "./components/AddCert.js";
import MemberProfile from "./components/MemberProfile.js";
export const Context = React.createContext();

const App = () => {
  const [members, setMembers] = useState();
  const [id, setId] = useState();
  console.log("members", members);
  useEffect(() => {
    fetch("http://localhost:8080/members")
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ members, setMembers, id, setId }}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/add_member" element={<AddMember />} />
            <Route path="/members/:id" element={<MemberProfile />} />
            <Route path="/add_cert" element={<AddCert />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
