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
<<<<<<< HEAD
  const { search, members, setId } = useContext(Context);
=======
  const { members, setId, id } = useContext(Context);
  const { state, setState } = useContext(Context);
  console.log(members);
>>>>>>> 092a69536972f847d517bff1a6df194f3eca9da9
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
<<<<<<< HEAD
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
=======
            {members?.map((item, index) => {
              return (
                <tr key={index}>
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
                        setId(item.id)
                        navigate(`/members/:${item.id}`)
                        
                       ;
                      }}
                    >
                      👤
                    </Button>
                  </td>
                </tr>
              );
            })}
>>>>>>> 092a69536972f847d517bff1a6df194f3eca9da9
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Home;
