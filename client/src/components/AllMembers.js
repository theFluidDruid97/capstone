import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import NavBar from "./NavBar.js";
import "./AllMembers.css";

const AllMembers = () => {
  const { search, members, memberParams, currentUser } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };
  useEffect(() => {}, [members]);
  return (
    <div className="Body">
      <NavBar />
      <div className="AllMembers">
        <div className="FormHeader">All Members</div>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Status</th>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>DoD ID</th>
              <th>E-Mail Address</th>
              <th>Unit</th>
              <th>Office Symbol</th>
              <th>AFSC</th>
            </tr>
          </thead>
          <tbody>
            {members
              ?.filter((member) => {
                if (memberParams[0].rank === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.rank.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].last_name === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.last_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].first_name === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].dod_id === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.dod_id.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].email === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.email.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].unit === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.unit.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].office_symbol === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.office_symbol
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].afsc === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.afsc.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (
                  (memberParams[0].rank === true &&
                    memberParams[0].last_name === true &&
                    memberParams[0].first_name === true &&
                    memberParams[0].dod_id === true &&
                    memberParams[0].email === true &&
                    memberParams[0].unit === true &&
                    memberParams[0].office_symbol === true &&
                    memberParams[0].afsc === true) ||
                  (memberParams[0].rank === false &&
                    memberParams[0].last_name === false &&
                    memberParams[0].first_name === false &&
                    memberParams[0].dod_id === false &&
                    memberParams[0].email === false &&
                    memberParams[0].unit === false &&
                    memberParams[0].office_symbol === false &&
                    memberParams[0].afsc === false)
                ) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.rank.toLowerCase().includes(search.toLowerCase()) ||
                    member.last_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.dod_id
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.email.toLowerCase().includes(search.toLowerCase()) ||
                    member.unit.toLowerCase().includes(search.toLowerCase()) ||
                    member.office_symbol
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.afsc.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
              })
              .map((item) => {
                return (
                  <tr
                    className="member-row"
                    onClick={() => {
                      navigate(`/all_members/${item.id}`);
                    }}
                    key={item.id}
                  >
                    <td>{item.status}</td>
                    <td>{item.rank}</td>
                    <td>{item.last_name}</td>
                    <td>{item.first_name}</td>
                    <td>{item.dod_id}</td>
                    <td>{item.email}</td>
                    <td>{item.unit}</td>
                    <td>{item.office_symbol}</td>
                    <td>{item.afsc}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMembers;
