import { useState, useContext } from "react";
import NavBarAdd from "./NavBarAdd.js";
import "./TrainingProfile.css";
import { Context } from "../App.js";
import { Routes, Route, useNavigate } from "react-router-dom";

const Training = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { id, training, setTraining, trainingProfile, setTrainingProfile } =
    useContext(Context);

  const urlID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  training?.find((item) => {
    // console.log("this is item.ID", item.id);
    if (item.id == urlID) {
      setTrainingProfile(item);
    }
  });

  // console.log("this is urlID", urlID);
  const handleDeleteClick = () => {
    let res = await fetch(`http://localhost:8080/training/${urlID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setMessage("Training Deleted");
    } else {
      setMessage("Some error occured");
    }
    // setTimeout(() => {
    //   console.log("Delayed for 1 second.");
    // }, 1000)
    // window.location.reload(true);
    navigate("/all_training");
  };

  return (
    <div className="TrainingProfile">
      <NavBarAdd />
      <div className="getTraining">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Training Name</th>
              <th>Certification Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr key={trainingProfile?.id}>
              <td>{trainingProfile?.training_name}</td>
              <td>{trainingProfile?.cert_duration}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-secondary" onClick={handleDeleteClick}>
          ❌ Delete Training
        </button>
      </div>
    </div>
  );
};

export default Training;
