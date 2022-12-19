import NavBarAdd from "./NavBarAdd.js";
import "./Home.css";
import { Context } from "../App.js";
import { useContext, useState } from "react";

const Home = () => {
  const { cookies, training } = useContext(Context);

  return (
    <div className="Body">
      <NavBarAdd />
      <div className="Home">
        <div className="header">Message Board</div>
        <ul className="mt-5">
          {training?.map((training) => (
            <li key={training.training_id}>
              New training: {training.training_name}, created at{" "}
              {training.created_at}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
