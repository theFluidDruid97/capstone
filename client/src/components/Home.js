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
        {training?.map((training) => (
          <ul className="mt-5">
            <li>
              New training: {training.training_name}, created at{" "}
              {training.created_at}.
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
