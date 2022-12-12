import "./Landing.css";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";
import { Context } from "../App.js";
import { useContext } from "react";

const Landing = () => {
  const { currentUser, setCurrentUser } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    const signInInfo = {
      user_email: e.target[0].value,
      user_password: e.target[1].value,
    };
    setCurrentUser(signInInfo);
    console.log(currentUser);
  };
  return (
    <div className="landing">
      <div className="jumbotron bg-dark">
        <h1 className="display-4 m-0">SIGN IN TO</h1>
        <h1 className="display-4 mt-0 mb-5">
          <img
            src="https://user-images.githubusercontent.com/111238515/206806904-bafeede1-58e5-4863-8004-9c5131a73ece.png"
            alt="TrainTrack Logo"
            width="300"
            height="65"
          />
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group landing-form">
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              className="form-control bg-dark text-secondary"
              id="email"
              placeholder="E-Mail Address"
            />
          </div>
          <div className="form-group landing-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-secondary"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link
            to={{
              pathname: "/all_members",
              state: {
                currentUser: currentUser,
              },
            }}
          >
            <button
              type="submit"
              className="btn btn-success btn-lg sign-in-button"
            >
              TEST SIGN IN
            </button>
          </Link>
        </form>
        <p className="lead mt-5">
          <Link to="/all_members">
            <button className="btn btn-success btn-lg sign-in-button">
              SIGN IN
            </button>
          </Link>
        </p>
        <p className="lead">
          <Link to="/create_account">
            <button className="btn btn-secondary btn-lg sign-in-button">
              CREATE ACCOUNT
            </button>
          </Link>
        </p>
        <p></p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg sign-in-button"
            href="#"
            role="button"
          >
            CAC SIGN IN
          </a>
        </p>
        <footer className="footer">
          <p className="mt-5 mb-0">By continuing you agree to accept our </p>
          <p className="mt-0">
            <a href="#" role="button">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" role="button">
              Terms of Service
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
