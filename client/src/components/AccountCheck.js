import React, { useEffect, useState, useContext } from "react";
import { Context } from "../App.js";
import CreateAccount from "./CreateAccount.js";

const Accountcheck = () => {
  const { users, setUsers } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username: "username", password: "password" };
    localStorage.setItem("user", user);
  };
  return <div> {user.username} is logged in</div>;
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //   //   const foundUser = JSON.parse(loggedInUser):
  //   //   setUser(foundUser);
  //   /}
  // },[]);

  // const handleLogout = () => {
  //   setUser({});
  //   setUsername("");
  //   setPassword("");
  //   localStorage.clear();
  // };

  //   return (
  //     <form onSubmit={handleSubmit}></form>
  //     <input type="text" value={username}></input>
  //     <button onClick={handleLogout}>logout</button>
  //     <Link to="/create_account"></Link>
  //   )
};

export default Accountcheck;
// ========================================================================
// const [username, setUsername] = useState();
// const [password, setPassword] = useState();
// const [user, SetUser] = useState();
// useEffect(() => {
//   let array = [];
//   let keys = Object.keys(localStorage);
//   for (let i = 0; i < keys.length; i++) {
//     array.push(JSON.parse(localStorage.getItem(keys[i])));
//   }
// });

// return (
//   <div className="accounts-container">
//     <div className="ltext">Accounts from jesse</div>
//     <ol className="ltext2">
//       {user?.map((r) => (
//         <li>{user.name}</li>
//       ))}
//       {console.log(user)}
//     </ol>
//   </div>
// );
