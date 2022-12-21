import { Context } from "../App.js";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBarMemberProfile = () => {
  const {
    search,
    setSearch,
    memberProfileParams,
    setMemberProfileParams,
    checked,
    setChecked,
    setCurrentUser,
    cookies,
  } = useContext(Context);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleToggle = (e) => {
    let updatedMemberProfileParams = [...memberProfileParams];
    let updatedMemberProfileParam = updatedMemberProfileParams[0][e.target.id];
    updatedMemberProfileParam = !updatedMemberProfileParam;
    updatedMemberProfileParams[0][e.target.id] = updatedMemberProfileParam;
    setMemberProfileParams(updatedMemberProfileParams);
  };
  const handleLogout = () => {
    setCurrentUser();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand ml-5" href="/home">
        <img
          src="https://user-images.githubusercontent.com/111238515/206806904-bafeede1-58e5-4863-8004-9c5131a73ece.png"
          alt="TrainTrack Logo"
          width="225"
          height="50"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/all_members">
        <button
          className="btn nav-btn btn-outline-secondary ml-2"
          onClick={() => setSearch("")}
        >
          All Members
        </button>
      </Link>
      <Link to="/add_member">
        <button
          className="btn nav-btn btn-outline-secondary ml-2"
          onClick={() => setSearch("")}
        >
          Add Member
        </button>
      </Link>
      <Link to="/all_training">
        <button
          className="btn nav-btn btn-outline-secondary ml-2"
          onClick={() => setSearch("")}
        >
          All Training
        </button>
      </Link>
      <Link to="/add_training">
        <button
          className="btn nav-btn btn-outline-secondary ml-2"
          onClick={() => setSearch("")}
        >
          Add Training
        </button>
      </Link>
      <form className="form-inline ml-auto">
        <input
          className="form-control mr-sm-2 bg-dark text-secondary"
          type="search"
          placeholder="Filter"
          aria-label="Filter"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <ul className="navbar-nav mr-2">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter By
          </a>
          <div
            className="dropdown-menu bg-dark text-secondary"
            aria-labelledby="navbarDropdown"
          >
            <div className="form-check ml-2">
              <label className="form-check-label" htmlFor="dropdownCheck">
                <input
                  type="checkbox"
                  className="form-check-input bg-secondary"
                  id="status"
                  onChange={(e) => handleToggle(e)}
                />
                Status
              </label>
            </div>
            <div className="form-check ml-2">
              <label className="form-check-label" htmlFor="dropdownCheck">
                <input
                  type="checkbox"
                  className="form-check-input bg-secondary"
                  id="training_name"
                  onChange={(e) => handleToggle(e)}
                />
                Training Name
              </label>
            </div>
            <div className="form-check ml-2">
              <label className="form-check-label" htmlFor="dropdownCheck">
                <input
                  type="checkbox"
                  className="form-check-input bg-secondary"
                  id="expiration_date"
                  onChange={(e) => handleToggle(e)}
                />
                Expiration Date
              </label>
            </div>
            <div className="form-check ml-2">
              <label className="form-check-label" htmlFor="dropdownCheck">
                <input
                  type="checkbox"
                  className="form-check-input bg-secondary"
                  id="completion_date"
                  onChange={(e) => handleToggle(e)}
                />
                Completion Date
              </label>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-white">Logged in as:</div>
      <ul className="navbar-nav mr-5">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {cookies.user_email}
          </a>
          <div
            className="dropdown-menu ddm-2 bg-dark text-secondary"
            aria-labelledby="navbarDropdown"
          >
            <Link to="/user_profile">
              <button className="btn ddm-2-btn btn-outline-secondary ml-2">
                View User Profile
              </button>
            </Link>
            <button
              className="btn ddm-2-btn btn-outline-secondary ml-2 mt-2"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMemberProfile;
