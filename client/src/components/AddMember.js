import React, { useState } from "react";
import NavBarAdd from "./NavBarAdd.js";
import { Context } from "../App.js";
import { useContext } from "react";
import "./AddMember.css";

const AddMember = () => {
  // const [dod_id, setDod_id] = useState("");
  // const [rank, setRank] = useState("");
  // const [last_name, setLast_name] = useState("");
  // const [first_name, setFirst_name] = useState("");
  // const [email, setEmail] = useState("");
  // const [unit, setUnit] = useState("");
  // const [office_symbol, setOffice_symbol] = useState("");
  // const [afsc, setAfsc] = useState("");
  // const [message, setMessage] = useState("");

  const {
    dod_id,
    setDod_id,
    rank,
    setRank,
    last_name,
    setLast_name,
    first_name,
    setFirst_name,
    email,
    setEmail,
    unit,
    setUnit,
    office_symbol,
    setOffice_symbol,
    afsc,
    setAfsc,
    message,
    setMessage,
  } = useContext(Context);

  let handleSubmit = async (e) => {
    try {
      let res = await fetch("http://localhost:8080/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dod_id: dod_id,
          rank: rank,
          last_name: last_name,
          first_name: first_name,
          email: email,
          unit: unit,
          office_symbol: office_symbol,
          afsc: afsc,
        }),
      });
      if (res.status === 200) {
        setDod_id("");
        setRank("");
        setLast_name("");
        setFirst_name("");
        setEmail("");
        setUnit("");
        setOffice_symbol("");
        setAfsc("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Body">
      <NavBarAdd />
      <div className="AddMember">
        <div className="FormHeader">Add Member</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group" onChange={(e) => setRank(e.target.value)}>
            <label htmlFor="rank">Rank</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter Rank"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setLast_name(e.target.value)}
          >
            <label htmlFor="last_name">Last Name</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setFirst_name(e.target.value)}
          >
            <label htmlFor="first_name">First Name</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setDod_id(e.target.value)}
          >
            <label htmlFor="dod_id">DoD ID #</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter DoD ID #"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setEmail(e.target.value)}
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter E-Mail Address"
            />
          </div>
          <div className="form-group" onChange={(e) => setUnit(e.target.value)}>
            <label htmlFor="unit">Unit</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter Unit"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setOffice_symbol(e.target.value)}
          >
            <label htmlFor="office_symbol">Office Symbol</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter Office Symbol"
            />
          </div>
          <div className="form-group" onChange={(e) => setAfsc(e.target.value)}>
            <label htmlFor="afsc">AFSC</label>
            <input
              className="form-control bg-dark text-secondary text-white"
              type="text"
              placeholder="Enter AFSC"
            />
          </div>
          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
