import { useState } from "react";
import NavBar from "./NavBar.js";
import "./AddTraining.css";

const AddTraining = () => {
  const [training_name, setTraining_name] = useState("");
  const [cert_duration, setCert_duration] = useState("");
  const [message, setMessage] = useState("");

  let addSubmit = async (e) => {
    // e.preventDefault(); //Used to test network. Will prevent page refresh.
    try {
      let res = await fetch("http://localhost:8080/training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          training_name: training_name,
          cert_duration: cert_duration,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTraining_name("");
        setCert_duration("");
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
      <NavBar />
      <form className="AddTraining" onSubmit={addSubmit}>
        <div
          className="form-group"
          onChange={(e) => setTraining_name(e.target.value)}
        >
          <div className="form-label">Name</div>
          <input
            className="form-control bg-dark"
            type="title"
            placeholder="Enter Certification/Training Name"
          />
        </div>
        <div
          className="form-group"
          onChange={(e) => setCert_duration(e.target.value)}
        >
          <div className="form-label">Frequency</div>
          <input
            className="form-control bg-dark"
            type="frequency"
            placeholder="Enter Certification/Training Frequency (In Months)"
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default AddTraining;
