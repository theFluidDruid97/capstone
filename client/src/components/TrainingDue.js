import { Context } from "../App.js";
import { useContext } from "react";

const test = [
  {
    id: 1,
    name: "John Doe",
    due_date: "12/13/2023",
    status: "due",
  },
];

const date = new Date();
var today_date = new Date().toLocaleDateString();

const TrainingDue = () => {
  console.log(today_date);

  // if (test.due_date[0] < month) {
  //   console.log("due in" + "" + test.due_date[0] - month + "months");
  // }
};
export default TrainingDue;
