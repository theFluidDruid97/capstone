import "./TrainingProfile.css";
import { useState, useContext, useEffect } from "react";
import NavBarAdd from "./NavBarAdd.js";
import { Context } from "../App.js";
import { Routes, Route, useNavigate } from "react-router-dom";

const Training = () => {
  const [message, setMessage] = useState("");
  const urlID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const { id, training, setTraining, trainingProfile, setTrainingProfile } =
    useContext(Context);
  training?.find((item) => {
    if (item.id == urlID) {
      setTrainingProfile(item);
    }
  });
  const navigate = useNavigate();
  const [training_name, setTraining_name] = useState(
    trainingProfile?.training_name
  );
  const [cert_duration, setCert_duration] = useState(
    trainingProfile?.cert_duration
  );
  const [training_link, setTraining_link] = useState(
    trainingProfile?.training_link
  );
  const [training_description, setTraining_description] = useState(
    trainingProfile?.training_description
  );
  const handleDeleteClick = async (e) => {
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
    navigate("/all_training");
    window.location.reload();
  };
  const handleEditClick = async (e) => {
    e.preventDefault(); //Used to test network. Will prevent page refresh.
    try {
      let res = await fetch(`http://localhost:8080/training/${urlID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          training_name: training_name,
          cert_duration: cert_duration,
          training_link: training_link,
          training_description: training_description,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
  useEffect(() => {
    setTraining_name(trainingProfile?.training_name);
    setCert_duration(trainingProfile?.cert_duration);
    setTraining_link(trainingProfile?.training_link);
    setTraining_description(trainingProfile?.training_description);
  }, [trainingProfile]);

  return (
    <div className="TrainingProfile">
      <NavBarAdd />
      <div className="getTraining">
        <table
          className="table table-dark table-striped table-hover"
          onChange={(e) => setTraining_name(e.target.value)}
        >
          <thead>
            <tr>
              <th>Training Name</th>
            </tr>
          </thead>
          <tbody>
            <tr key={trainingProfile?.id}>
              <input
                className="form-control bg-dark text-white"
                type="text"
                placeholder={trainingProfile?.training_name}
              />
            </tr>
          </tbody>
        </table>
        <table
          className="table table-dark table-striped table-hover"
          onChange={(e) => setCert_duration(e.target.value)}
        >
          <thead>
            <tr>
              <th>Certification Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr key={trainingProfile?.id}>
              <input
                className="form-control bg-dark text-white"
                type="text"
                placeholder={trainingProfile?.cert_duration}
              />
            </tr>
          </tbody>
        </table>
        <table
          className="table table-dark table-striped table-hover"
          onChange={(e) => setTraining_link(e.target.value)}
        >
          <thead>
            <tr>
              <th>Training Link</th>
            </tr>
          </thead>
          <tbody>
            <tr key={trainingProfile?.id}>
              <input
                className="form-control bg-dark text-white"
                type="text"
                placeholder={trainingProfile?.training_link}
              />
            </tr>
          </tbody>
        </table>
        <table
          className="table table-dark table-striped table-hover table-editable"
          onChange={(e) => setTraining_description(e.target.value)}
        >
          <thead>
            <tr>
              <th>Training Description</th>
            </tr>
          </thead>
          <tbody>
            <tr key={trainingProfile?.id}>
              <input
                className="form-control bg-dark text-white"
                type="text"
                placeholder={trainingProfile?.training_description}
              />
            </tr>
          </tbody>
        </table>
        <button className="btn btn-secondary" onClick={handleEditClick}>
          Submit Training Edit(s)
        </button>
        <button className="btn btn-secondary ml-3" onClick={handleDeleteClick}>
          Delete Training
        </button>
        <a href={trainingProfile?.training_link} target="_blank">
          <button className="btn btn-secondary ml-3">
            Go To Training Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default Training;
