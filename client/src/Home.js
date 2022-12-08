import React from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './App.js';



const Home = () => {
    const navigate = useNavigate();
    const {members} = useContext(Context);
    console.log(members)
    return (
        <div className="Body">
            <Container className="Home1">
                <Table className="Table1" striped bordered hover responsive variant="dark">
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
                                    <td><Button variant="dark" size="large" onClick={() => navigate("/members/:${item.dod_id}")}>👤</Button></td>


                                </tr>

                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Home