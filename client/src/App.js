import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllMembers from "./components/AllMembers.js";
import AllTraining from "./components/AllTraining.js";
import Landing from "./components/Landing";
import AddMember from "./components/AddMember.js";
import AddTraining from "./components/AddTraining.js";
import MemberProfile from "./components/MemberProfile.js";
import CreateAccount from "./components/CreateAccount.js";

const App = () => {
  const initMemberParams = [
    {
      rank: false,
      last_name: false,
      first_name: false,
      dod_id: false,
      email: false,
      unit: false,
      office_symbol: false,
      afsc: false,
    },
  ];
  const initTrainingParams = [
    {
      training_name: false,
      cert_duration: false,
    },
  ];
  const [members, setMembers] = useState();
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [training, setTraining] = useState();
  const [state, setState] = useState();
  const [memberParams, setMemberParams] = useState(initMemberParams);
  const [trainingParams, setTrainingParams] = useState(initTrainingParams);
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
          memberParams,
          setMemberParams,
          trainingParams,
          setTrainingParams,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/all_members" element={<AllMembers />} />
            <Route path="/add_member" element={<AddMember />} />
            <Route path="/all_members/:id" element={<MemberProfile />} />
            <Route path="/all_training" element={<AllTraining />} />
            <Route path="/add_training" element={<AddTraining />} />
            <Route path="/create_account" element={<CreateAccount />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export const Context = React.createContext();
export default App;
