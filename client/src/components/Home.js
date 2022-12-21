import NavBarAdd from "./NavBarAdd.js";
import "./Home.css";
import { Context } from "../App.js";
import { useNavigate } from "react-router-dom";
import { React, Component, useContext, useState, useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const Home = () => {
  const { cookies, training } = useContext(Context);
  const navigate = useNavigate();
  const options = [
    {
      theme: "dark1",
      backgroundColor: "#212529",
      exportFileName: "Training Completion by Unit",
      exportEnabled: true,
      willReadFrequently: true,
      title: {
        text: "Training Completion by Unit",
      },
      axisY: {
        title: "Training Completed",
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "spline",
          name: "377 SFS",
          showInLegend: true,
          dataPoints: [
            { y: 15, label: "Jan" },
            { y: 24, label: "Feb" },
            { y: 26, label: "Mar" },
            { y: 11, label: "Apr" },
            { y: 34, label: "May" },
            { y: 56, label: "Jun" },
            { y: 37, label: "Jul" },
            { y: 25, label: "Aug" },
            { y: 51, label: "Sept" },
            { y: 74, label: "Oct" },
            { y: 42, label: "Nov" },
            { y: 29, label: "Dec" },
          ],
        },
        {
          type: "spline",
          name: "102 AMXS",
          showInLegend: true,
          dataPoints: [
            { y: 16, label: "Jan" },
            { y: 18, label: "Feb" },
            { y: 37, label: "Mar" },
            { y: 64, label: "Apr" },
            { y: 55, label: "May" },
            { y: 42, label: "Jun" },
            { y: 51, label: "Jul" },
            { y: 22, label: "Aug" },
            { y: 38, label: "Sept" },
            { y: 62, label: "Oct" },
            { y: 72, label: "Nov" },
            { y: 24, label: "Dec" },
          ],
        },
      ],
    },
    {
      theme: "dark1",
      backgroundColor: "#212529",
      exportFileName: "Overall Member Status",
      exportEnabled: true,
      willReadFrequently: true,
      title: {
        text: "Overall Member Status",
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}%</strong>",
          indexLabel: "{y}%",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 32, label: "Due" },
            { y: 6, label: "Over Due" },
            { y: 52, label: "Current" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="Body">
      <NavBarAdd />
      <div className="row">
        <div className="col ml-5 mt-4">
          <div className="card p-1 bg-dark">
            <CanvasJSChart options={options[0]} />
          </div>
          <div className="card p-1 mt-3 bg-dark">
            <CanvasJSChart options={options[1]} />
          </div>
        </div>
        <div className="col mr-5 mt-4">
          <div className="tcard bg-dark text-white">
            <h1 className="pt-3">
              <b>Training Added</b>
            </h1>
            <div className="m-5">
              {training?.map((training) => (
                <p className="card p-1 bg-secondary" key={training.id}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/all_training/${training.id}`)}
                  >
                    <span className="float-left">
                      <b>
                        <u>New training</u>
                      </b>
                      : {training.training_name}
                    </span>
                    <span className="float-right">
                      <b>
                        <u>Created on</u>
                      </b>
                      : {training.created_at.toString().split("T")[0]}
                    </span>
                  </button>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
