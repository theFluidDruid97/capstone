import { Context } from "../App.js";
import { useContext } from "react";
import "./MemberProfile.css";
// import Training from "./TrainingDummy.js";
import NavBarTraining from "./NavBarTraining.js";

const MemberProfile = () => {
  const { members, training, setTraining, person, setPerson } =
    useContext(Context);
  const urlID = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  members?.find((item) => {
    console.log(item.id);
    if (item.id == urlID) {
      setPerson(item);
    }
  });

  return (
    <div className="Body">
      <NavBarTraining />
      <div className="Member">
        <div>
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
        <div>
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Training Name</th>
                <th>Certification Duration</th>
              </tr>
            </thead>
            {training?.map((item) => {
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
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
