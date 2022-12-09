import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import NavBar from "./NavBar.js";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { search, members, id, setId, state, setState } = useContext(Context);
  return (
    <div className="Body">
      <NavBar />
      <Container className="Home1">
        <Table
          className="Table1"
          striped
          bordered
          hover
          responsive
          variant="dark"
        >
          <thead>
            <tr>
              <th>Status</th>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>DoD Id</th>
              <th>Email</th>
              <th>Unit</th>
              <th>Office</th>
              <th>AFSC</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {members
              ?.filter((member) => {
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
                  member.dod_id.toLowerCase().includes(search.toLowerCase()) ||
                  member.email.toLowerCase().includes(search.toLowerCase()) ||
                  member.unit.toLowerCase().includes(search.toLowerCase()) ||
                  member.office_symbol
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  member.afsc.toLowerCase().includes(search.toLowerCase())
                ) {
                  return member;
                }
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.status}</td>
                    <td>{item.rank}</td>
                    <td>{item.last_name}</td>
                    <td>{item.first_name}</td>
                    <td>{item.dod_id}</td>
                    <td>{item.email}</td>
                    <td>{item.unit}</td>
                    <td>{item.office_symbol}</td>
                    <td>{item.afsc}</td>
                    <td>
                      <Button
                        variant="dark"
                        size="large"
                        onClick={() => {
                          setId(item.id);
                          navigate(`/members/:${item.id}`);
                        }}
                      >
                        👤
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Home;
