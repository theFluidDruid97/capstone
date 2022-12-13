import { Context } from "../App.js";
import { useState, useContext, componentDidUpdate } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./MemberProfile.css";
import JsPDF from "jspdf";
import NavBarTraining from "./NavBarTraining.js";

const MemberProfile = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    members,
    training,
    setTraining,
    person,
    setPerson,
    search,
    trainingParams,
  } = useContext(Context);
  const urlID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const generatePDF = () => {
    const report = new JsPDF("a4");
    report.html(document.querySelector("#PDF")).then(() => {
      report.save("member.pdf");
    });
  };
  members?.find((item) => {
    if (item.id == urlID) {
      setPerson(item);
    }
  });
  const handleDeleteClick = async (e) => {
    let res = await fetch(`http://localhost:8080/members/${urlID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      setMessage("Member Deleted");
    } else {
      setMessage("Some error occured");
    }
    navigate("/all_members");
    window.location.reload();
  };
  const handleEditClick = async (e) => {
    // let res = await fetch(`http://localhost:8080/members/${urlID}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (res.status === 200) {
    //   setMessage("Member Deleted");
    // } else {
    //   setMessage("Some error occured");
    // }
    // // setTimeout(() => {
    // //   console.log("Delayed for 1 second.");
    // // }, 1000)
    // // window.location.reload(true);
    // navigate("/all_members");
  };

  return (
    <div className="Body">
      <NavBarTraining />
      <div className="Member" id="PDF">
        <button
          className="btn btn-secondary mb-3"
          onClick={() => {
            generatePDF();
          }}
          type="button"
        >
          Export PDF
        </button>
        <div id="PDF">
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>DoD ID</th>
                <th>Email</th>
                <th>Unit</th>
                <th>Office</th>
                <th>AFSC</th>
              </tr>
            </thead>
            <tbody>
              <tr key={person?.id}>
                <td>{person?.rank}</td>
                <td>{person?.last_name}</td>
                <td>{person?.first_name}</td>
                <td>{person?.dod_id}</td>
                <td>{person?.email}</td>
                <td>{person?.unit}</td>
                <td>{person?.office_symbol}</td>
                <td>{person?.afsc}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="PDF2">
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Training Name</th>
                <th>Certification Duration</th>
              </tr>
            </thead>
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
                  <tbody>
                    <tr key={item.id}>
                      <td>{item.training_name}</td>
                      <td>{item.cert_duration}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
          <button className="btn btn-secondary" onClick={handleEditClick}>
            Edit Member
          </button>
          <button
            className="btn btn-secondary ml-3"
            onClick={handleDeleteClick}
          >
            Delete Member
          </button>
          <button className="btn btn-secondary ml-3" type="button">
            Assign Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
