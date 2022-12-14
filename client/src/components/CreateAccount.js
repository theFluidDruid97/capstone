import { Context } from "../App.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

const CreateAccount = () => {
  const { users, setId } = useContext(Context);
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const submit = async (e) => {
    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: userEmail,
          user_password: userPassword,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Body">
      <div className="CreateAccount">
        <div className="FormHeaderCA">Create Account</div>
        <form
          onSubmit={() => {
            submit();
            navigate("/");
            window.location.reload();
          }}
        >
          <div
            className="form-group"
            onChange={(e) => setUserEmail(e.target.value)}
          >
            <div className="form-label">E-Mail Address</div>
            <input
              className="form-control bg-dark text-white"
              type="text"
              placeholder="Enter E-Mail Address"
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setUserPassword(e.target.value)}
          >
            <div className="form-label">Password</div>
            <input
              className="form-control bg-dark text-white"
              type="text"
              placeholder="Enter Password"
            />
          </div>
          <button
            className="btn btn-danger mr-3"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button className="btn btn-secondary ml-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
