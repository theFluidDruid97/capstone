import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllMembers from "./components/AllMembers.js";
import Landing from "./components/Landing";
import AddMember from "./components/AddMember.js";
import AddTraining from "./components/AddTraining.js";
import MemberProfile from "./components/MemberProfile.js";

const App = () => {
  const initParams = [
    "rank",
    "last_name",
    "first_name",
    "dod_id",
    "email",
    "unit",
    "office_symbol",
    "afsc",
  ];
  const [members, setMembers] = useState();
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [training, setTraining] = useState();
  const [state, setState] = useState();
  const [params, setParams] = useState(initParams);
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8080/members")
      .then((response) => response.json())
      .then((data) => setMembers(data));
    fetch("http://localhost:8080/training")
      .then((response) => response.json())
      .then((data) => setTraining(data));
  }, []);

  return (
    <div className="App">
      <Context.Provider
        value={{
          members,
          setMembers,
          id,
          setId,
          state,
          setState,
          search,
          setSearch,
          training,
          setTraining,
          params,
          setParams,
          checked,
          setChecked,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/all_members" element={<AllMembers />} />
            <Route path="/add_member" element={<AddMember />} />
            <Route path="/add_training" element={<AddTraining />} />
            <Route path="/all_members/:id" element={<MemberProfile />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export const Context = React.createContext();
export default App;
