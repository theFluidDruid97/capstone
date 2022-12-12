import { Context } from "../App.js";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBarAdd = () => {
  const {
    search,
    setSearch,
    memberParams,
    setMemberParams,
    checked,
    setChecked,
  } = useContext(Context);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleToggle = (e) => {
    let updatedMemberParams = [...memberParams];
    let updatedMemberParam = updatedMemberParams[0][e.target.id];
    updatedMemberParam = !updatedMemberParam;
    updatedMemberParams[0][e.target.id] = updatedMemberParam;
    setMemberParams(updatedMemberParams);
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand ml-5" href="/">
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
        <button className="btn nav-btn btn-outline-secondary ml-2">
          All Members
        </button>
      </Link>
      <Link to="/add_member">
        <button className="btn nav-btn btn-outline-secondary ml-2">
          Add Member
        </button>
      </Link>
      <Link to="/all_training">
        <button className="btn nav-btn btn-outline-secondary ml-2">
          All Training
        </button>
      </Link>
      <Link to="/add_training">
        <button className="btn nav-btn btn-outline-secondary ml-2">
          Add Training
        </button>
      </Link>
    </nav>
  );
};

export default NavBarAdd;
