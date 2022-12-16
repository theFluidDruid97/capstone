import NavBarAdd from "./NavBarAdd.js";
import "./UserProfile.css";
import { Context } from "../App.js";
import { useContext } from "react";

const UserProfile = () => {
  const { cookies } = useContext(Context);
  return (
    <div className="Body">
      <NavBarAdd />
      <div className="UserProfile">
        <div className="header">Profile</div>
        <div className="content">
          <h3 className="mt-5">Edit E-Mail Address</h3>
          <input
            className="form-control bg-dark text-white"
            type="text"
            placeholder={cookies.user_email}
          />
          <button className="btn btn-secondary mt-3">Submit New E-Mail</button>
          <h3 className="mt-5">Edit Password</h3>
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
          <button className="btn btn-secondary mt-3">
            Submit New Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
