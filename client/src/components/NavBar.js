import { Context } from "../App.js";
import { useContext } from "react";

const NavBar = () => {
  const { search, setSearch } = useContext(Context);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
        aria-pressed="true"
      >
        All Members
      </a>
      <a
        href="add_member"
        className="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
      >
        Add Member
      </a>
      <a
        href="all_training"
        className="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
      >
        All Training
      </a>
      <a
        href="add_training"
        className="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
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
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Rank
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Last Name
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                First Name
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                DoD ID
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                E-Mail
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Unit
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Office Symbol
              </label>
            </div>
            <div className="form-check ml-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
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
