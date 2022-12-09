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
      <a className="navbar-brand ml-5" href="#">
        <img
          src="https://user-images.githubusercontent.com/110724575/206316998-3088ca02-7946-49af-8230-743521ef2206.png"
          alt="TrainTrack Logo"
          width="50"
          height="50"
        />
        <img
          src="https://user-images.githubusercontent.com/110724575/206736883-a5e70753-79ef-4d5d-8e52-82cec4ce8c47.png"
          alt="TrainTrack"
          width="150"
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
        href="#"
        class="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
      >
        All Members
      </a>
      <a
        href="#"
        class="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
      >
        Add Member
      </a>
      <a
        href="#"
        class="btn btn-outline-secondary ml-2"
        role="button"
        aria-pressed="true"
      >
        All Training
      </a>
      <a
        href="#"
        class="btn btn-outline-secondary ml-2"
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
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Rank
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Last Name
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                First Name
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                DoD ID
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                E-Mail
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Unit
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
                Office Symbol
              </label>
            </div>
            <div class="form-check ml-2">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck"
              />
              <label class="form-check-label" for="dropdownCheck">
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
