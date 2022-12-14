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
import TrainingProfile from "./components/TrainingProfile.js";
import { Date } from "./components/Date.js";
import Home from "./components/Home.js";
import UserProfile from "./components/UserProfile.js";

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
  const [person, setPerson] = useState();
  const [trainingProfile, setTrainingProfile] = useState();
  const [memberParams, setMemberParams] = useState(initMemberParams);
  const [trainingParams, setTrainingParams] = useState(initTrainingParams);
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [memberTraining, setMemberTraining] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/members")
      .then((response) => response.json())
      .then((data) => setMembers(data));
    fetch("http://localhost:8080/training")
      .then((response) => response.json())
      .then((data) => setTraining(data));
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Context.Provider
        value={{
          members,
          setMembers,
          person,
          setPerson,
          trainingProfile,
          setTrainingProfile,
          search,
          setSearch,
          training,
          setTraining,
          memberParams,
          setMemberParams,
          trainingParams,
          setTrainingParams,
          users,
          setUsers,
          currentUser,
          setCurrentUser,
          memberTraining,
          setMemberTraining,
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
            <Route path="/all_training/:id" element={<TrainingProfile />} />
            <Route path="/create_account" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user_profile" element={<UserProfile />} />
            <Route path="/date" element={<Date />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export const Context = React.createContext();
export default App;
