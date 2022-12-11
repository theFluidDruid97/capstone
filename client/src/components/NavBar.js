import { Context } from "../App.js";
import { useContext, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const { search, setSearch, params, setParams, checked, setChecked } =
    useContext(Context);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleToggle = (e) => {
    setChecked(!checked);
    let titleIndex = params.indexOf(e.target.id);
    let newParams = params.filter((param) => {
      return e.target.checked;
    });
    console.log(params[titleIndex], e.target.checked);
    console.log(newParams);
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
      <a
        href="all_members"
        className="btn btn-outline-secondary ml-2"
        role="button"
      >
        All Members
      </a>
      <a
        href="add_member"
        className="btn btn-outline-secondary ml-2"
        role="button"
      >
        Add Member
      </a>
      <a
        href="all_training"
        className="btn btn-outline-secondary ml-2"
        role="button"
      >
        All Training
      </a>
      <a
        href="add_training"
        className="btn btn-outline-secondary ml-2 mr-2"
        role="button"
      >
        Add Training
      </a>
      <form className="form-inline ml-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleChange(e)}
        />
      </form>
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
            Search By
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="rank"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Rank
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="last_name"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Last Name
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="first_name"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                First Name
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dod_id"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                DoD ID
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="email"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                E-Mail
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="unit"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Unit
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="office_symbol"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Office Symbol
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="afsc"
                defaultChecked={checked}
                onChange={(e) => handleToggle(e)}
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                AFSC
              </label>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
