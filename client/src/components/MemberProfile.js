import { Context } from "../App.js";
import { useState, useContext, componentDidUpdate, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./MemberProfile.css";
import JsPDF from "jspdf";
import NavBarTraining from "./NavBarTraining.js";

const { DateTime } = require("luxon");

const MemberProfile = () => {
  const {
    members,
    training,
    setTraining,
    person,
    setPerson,
    search,
    trainingParams,
    memberTraining,
    setMemberTraining,
    completion_date,
    setCompletion_date,
  } = useContext(Context);
  const urlID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  members?.find((item) => {
    if (item.id == urlID) {
      setPerson(item);
    }
  });
  const [record_id, setRecord_id] = useState("");
  const navigate = useNavigate();
  const [dod_id, setDod_id] = useState("");
  const [rank, setRank] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [unit, setUnit] = useState("");
  const [office_symbol, setOffice_symbol] = useState("");
  const [afsc, setAfsc] = useState("");
  const [due_date, setDue_date] = useState();

  const Date = (dt, m) => {
    const date = DateTime.fromFormat(dt, "yyyy-MM-dd")
      .plus({ months: m })
      .toFormat("yyyy-MM-dd");
    return date;
  };

  const generatePDF = () => {
    const report = new JsPDF("a4");
    report.html(document.querySelector("#PDF")).then(() => {
      report.save("member.pdf");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/member_training/${urlID}`)
      .then((response) => response.json())
      .then((data) => {
        setMemberTraining(data);
      });
    fetch(`http://localhost:8080/training`)
      .then((response) => response.json())
      .then((data) => {
        setTraining(data);
      });
  }, [person]);
  const handleDeleteClick = async (e) => {
    let res = await fetch(`http://localhost:8080/members/${urlID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/all_members");
    window.location.reload();
  };

  const handleEditClick = async (e) => {
    // e.preventDefault(); //Used to test network. Will prevent page refresh.
    try {
      let res = await fetch(`http://localhost:8080/members/${urlID}`, {
        method: "PUT",
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
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const handleCompletionClick = async (e, item) => {
    try {
      let res = await fetch(`http://localhost:8080/member_training/${urlID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          record_id: item.record_id,
          completion_date: completion_date,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const handleAssignTrainingClick = async (e, item) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:8080/member_training/${urlID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          training_id: item.id,
          completion_date: "NOT COMPLETE",
          cert_duration: item.cert_duration,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const handleRemoveTrainingClick = async (e, item) => {
    let res = await fetch(`http://localhost:8080/member_training/${urlID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        record_id: item.record_id,
      }),
    });
    window.location.reload();
  };

  const handleTrainingClick = () => {};
  useEffect(() => {
    setDod_id(person?.dod_id);
    setRank(person?.rank);
    setLast_name(person?.last_name);
    setFirst_name(person?.first_name);
    setEmail(person?.email);
    setUnit(person?.unit);
    setOffice_symbol(person?.office_symbol);
    setAfsc(person?.afsc);
  }, [person]);

  return (
    <div className="Body" id="PDF">
      <NavBarTraining />
      <div className="Member">
        <button
          className="btn btn-secondary mb-3"
          onClick={() => {
            generatePDF();
          }}
          type="button"
        >
          Export PDF
        </button>
        <button
          className="btn btn-secondary mb-3 ml-3"
          onClick={() => handleEditClick()}
        >
          Submit Member Edit(s)
        </button>
        <button
          className="btn btn-danger mb-3 ml-3"
          onClick={() => handleDeleteClick()}
        >
          Delete Member
        </button>
        <div>
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr key={person?.id}>
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
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.rank}
                    onChange={(e) => setRank(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.dod_id}
                    onChange={(e) => setDod_id(e.target.value)}
                  />
                </td>
                <td className="w-25">
                  <input
                    className="email form-control bg-dark text-white border-0"
                    placeholder={person?.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.office_symbol}
                    onChange={(e) => setOffice_symbol(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control bg-dark text-white border-0"
                    type="text"
                    placeholder={person?.afsc}
                    onChange={(e) => setAfsc(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="PDF2">
          <table className="table table-dark table-striped">
            <thead>
              <tr key={person?.id}>
                <th>Training Name</th>
                <th>Expiration Date</th>
                <th className="completion">Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {memberTraining
                // ?.filter((training) => {
                //   if (trainingParams[0].training_name === true) {
                //     if (search === "") {
                //       return training;
                //     } else if (
                //       training.training_name
                //         .toLowerCase()
                //         .includes(search.toLowerCase())
                //     ) {
                //       return training;
                //     }
                //   }
                //   if (trainingParams[0].cert_duration === true) {
                //     if (search === "") {
                //       return training;
                //     } else if (
                //       training.cert_duration.toString().includes(search)
                //     ) {
                //       return training;
                //     }
                //   }
                //   if (
                //     (trainingParams[0].training_name === true &&
                //       trainingParams[0].cert_duration === true) ||
                //     (trainingParams[0].training_name === false &&
                //       trainingParams[0].cert_duration === false)
                //   ) {
                //     if (search === "") {
                //       return training;
                //     } else if (
                //       training.training_name
                //         .toLowerCase()
                //         .includes(search.toLowerCase()) ||
                //       training.cert_duration.toString().includes(search)
                //     ) {
                //       return training;
                //     }
                //   }
                // })
                ?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="align-middle">{item.training_name}</td>
                      <td className="align-middle">
                        {Date(item.completion_date, item.cert_duration)}
                      </td>
                      <td className="input-group">
                        <input
                          className="form-control bg-dark text-white border-0"
                          type="text"
                          placeholder={item.completion_date}
                          onChange={(e) => {
                            setCompletion_date(e.target.value);
                          }}
                        />
                        <button
                          className="btn btn-secondary"
                          onClick={(e) => {
                            handleCompletionClick(e, item);
                          }}
                          type="button"
                        >
                          Submit Date
                        </button>
                        <button
                          className="RemoveTraining btn btn-danger"
                          onClick={(e) => {
                            handleRemoveTrainingClick(e, item);
                          }}
                          type="button"
                        >
                          Remove Training
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Assign Training
            </button>
            <div
              className="dropdown-menu ddm-3 bg-secondary"
              aria-labelledby="dropdownMenuButton"
            >
              {training?.map((item) => {
                return (
                  <button
                    onClick={(e) => handleAssignTrainingClick(e, item)}
                    className="dropdown-item btn btn-secondary"
                    key={item.id}
                  >
                    {item.training_name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
