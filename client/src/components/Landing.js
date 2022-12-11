import "./Landing.css";
import NavBar from "./NavBar.js";

const Landing = () => {
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
        <div className="form-group landing-form">
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            className="form-control bg-dark"
            id="email"
            placeholder="E-Mail Address"
          />
        </div>
        <div className="form-group landing-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control bg-dark"
            id="password"
            placeholder="Password"
          />
        </div>
        <p className="lead mt-5">
          <a className="btn btn-success btn-lg" href="#" role="button">
            SIGN IN
          </a>
        </p>
        <p className="lead">
          <a className="btn btn-secondary btn-lg" href="#" role="button">
            CREATE ACCOUNT
          </a>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
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
