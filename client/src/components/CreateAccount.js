import React, { useEffect, useState } from "react";

const CreateAccount = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    let array = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      array.push(JSON.parse(localStorage.getItem(keys[i])));
    }
  });

  return (
    <div className="accounts-container">
      <div className="ltext">Accounts from jesse</div>
      <ol className="ltext2">
        {result?.map((r) => (
          <li>{r.name}</li>
        ))}
        {console.log(result)}
      </ol>
    </div>
  );
};

export default CreateAccount;
// const Leaderboard = () => {
// const [result, setResult] = useState([])

//   useEffect(() => {
//     let array = []
//     let keys = Object.keys(localStorage)
//     for (let i = 0; i < keys.length; i++) {
//      array.push(JSON.parse(localStorage.getItem(keys[i])));
//     }
//     array.sort((a, b) => (a.avg > b.avg) ? -1 : 1)
//     setResult(array)
//   }, []);
