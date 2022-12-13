import React from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import NavBarTraining from "./NavBarTraining.js";
import "./AllTraining.css";

const AllTraining = () => {
  const { search, training, id, setId, trainingParams } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="Body">
      <NavBarTraining />
      <div className="AllTraining">
        <div className="FormHeader">All Training</div>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Training Name</th>
              <th>Certification Duration</th>
            </tr>
          </thead>
          <tbody>
            {training
              ?.filter((training) => {
                if (trainingParams[0].training_name === true) {
                  if (search === "") {
                    return training;
                  } else if (
                    training.training_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return training;
                  }
                }
                if (trainingParams[0].cert_duration === true) {
                  if (search === "") {
                    return training;
                  } else if (
                    training.cert_duration.toString().includes(search)
                  ) {
                    return training;
                  }
                }
                if (
                  (trainingParams[0].training_name === true &&
                    trainingParams[0].cert_duration === true) ||
                  (trainingParams[0].training_name === false &&
                    trainingParams[0].cert_duration === false)
                ) {
                  if (search === "") {
                    return training;
                  } else if (
                    training.training_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    training.cert_duration.toString().includes(search)
                  ) {
                    return training;
                  }
                }
              })
              .map((item) => {
                return (
                  <tr
                    className="training-row"
                    onClick={() => {
                      navigate(`/all_training/${item.id}`);
                    }}
                    key={item.id}
                  >
                    <td>{item.training_name}</td>
                    <td>{item.cert_duration}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTraining;
