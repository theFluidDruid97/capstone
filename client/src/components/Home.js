import NavBarAdd from "./NavBarAdd.js";
import "./Home.css";
import { Context } from "../App.js";
import { useContext } from "react";

const Home = () => {
  const { cookies } = useContext(Context);
  console.log(cookies);
  return (
    <div className="Body">
      <NavBarAdd />
      <div className="Home d-flex justify-content-center align-items-center align-self-center">
        <h1>MESSAGE BOARD PLACEHOLDER</h1>
      </div>
    </div>
  );
};

export default Home;
