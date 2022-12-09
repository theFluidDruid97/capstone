import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddMember from "./components/AddMember.js";
import AddCert from "./components/AddCert.js";
import MemberProfile from "./components/MemberProfile.js";

const App = () => {
  const [members, setMembers] = useState();
  const [id, setId] = useState();
<<<<<<< HEAD
  const [search, setSearch] = useState("");
=======
  const [state, setState] = useState();
  console.log("members", members);
>>>>>>> 092a69536972f847d517bff1a6df194f3eca9da9
  useEffect(() => {
    fetch("http://localhost:8080/members")
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
      <Context.Provider
        value={{ members, setMembers, id, setId, search, setSearch }}
      >
=======
      <Context.Provider value={{ members, setMembers, id, setId, state, setState }}>
>>>>>>> 092a69536972f847d517bff1a6df194f3eca9da9
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

export const Context = React.createContext();
export default App;
