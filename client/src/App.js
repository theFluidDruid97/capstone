import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddMember from "./AddMember.js";
import AddCert from "./AddCert.js";
export const Context = React.createContext();

var test = [
  {
      "id": 1,
      "status": "Due",
      "rank": "SSgt",
      "last_name": "Bartoszewicz",
      "first_name": "Maurise",
      "dod_id": "1234567890",
      "email": "billybob@yadayad.com",
      "unit": "AFSOC",
      "office_symbol": "SCOO",
      "afsc": "111222"

  },
  {
      "id": 2,
      "status": "Current",
      "rank": "SSgt",
      "last_name": "Bartoszewicz",
      "first_name": "Maurise",
      "dod_id": "9876543210",
      "email": "billybob@yadayad.com",
      "unit": "AFSOC",
      "office_symbol": "SCOO",
      "afsc": "117756"
  }
]
 



const App = () =>{
const [members, setMembers] = useState(test);
console.log('members', members);

  return (
    <div className="App">
      <Context.Provider
        value={{members, setMembers}}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/members/id" element={<Home />} />
            <Route path="/add_member" element={<AddMember />} />
            <Route path="/add_cert" element={<AddCert />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
