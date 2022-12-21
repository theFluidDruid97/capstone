import NavBarAdd from "./NavBarAdd.js";
import "./UserProfile.css";
import { Context } from "../App.js";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const {
    cookies,
    memberTraining,
    setMemberTraining,
    members,
    person,
    setPerson,
  } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    members?.find((member) => {
      if (member.email == cookies.user_email) {
        setPerson(member);
        fetch(`http://localhost:8080/member_training/${member.id}`)
          .then((response) => response.json())
          .then((data) => {
            setMemberTraining(data);
          });
      }
    });
  }, [members]);
  console.log(person);

  return (
    <div className="Body">
      <NavBarAdd />
      <div className="UserProfile">
        <div className="header">
          {person?.first_name.toUpperCase()} {person?.last_name.toUpperCase()}
        </div>
        <div className="content">
          <div>
            <h4 className="mt-5">Due/Over Due Training</h4>
            <div className="trng-content">
              {memberTraining?.map((training) => {
                if (training.status == "Due") {
                  return (
                    <div
                      key={training.record_id}
                      className="trng-label bg-warning"
                    >
                      {training.training_name}
                    </div>
                  );
                } else if (training.status == "Over Due") {
                  return (
                    <div
                      key={training.record_id}
                      className="trng-label bg-danger"
                    >
                      {training.training_name}
                    </div>
                  );
                }
              })}
            </div>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => navigate(`/all_members/${person?.id}`)}
            >
              View Member Profile
            </button>
          </div>
          <h4 className="mt-5">Edit E-Mail Address</h4>
          <input
            className="form-control bg-dark text-white"
            type="password"
            placeholder="Current Password"
          />
          <input
            className="form-control bg-dark text-white"
            type="text"
            placeholder="New Email"
          />
          <button className="btn btn-secondary mt-2">Submit New E-Mail</button>
          <h4 className="mt-5">Edit Password</h4>
          <input
            className="form-control bg-dark text-white"
            type="password"
            placeholder="Current Password"
          />
          <input
            className="form-control bg-dark text-white"
            type="password"
            placeholder="New Password"
          />
          <input
            className="form-control bg-dark text-white"
            type="password"
            placeholder="Confirm New Password"
          />
          <button className="btn btn-secondary mt-2 mb-3">
            Submit New Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
