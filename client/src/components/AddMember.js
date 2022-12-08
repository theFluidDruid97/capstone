import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddMember = () => {
  const [dod_id, setDod_id] = useState("");
  const [rank, setRank] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [unit, setUnit] = useState("");
  const [office_symbol, setOffice_symbol] = useState("");
  const [afsc, setAfsc] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    try {
      let res = await fetch("http://localhost:8080/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dod_id: dod_id,
          rank: rank,
          last_name: last_name,
          first_name: first_name,
          email: email,
          unit: unit,
          office_symbol: office_symbol,
          afsc: afsc,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setDod_id("");
        setRank("");
        setLast_name("");
        setFirst_name("");
        setEmail("");
        setUnit("");
        setOffice_symbol("");
        setAfsc("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-5 mt-5"
        controlId="formBasicDodId"
        onChange={(e) => setDod_id(e.target.value)}
      >
        <Form.Label>DoD Id #</Form.Label>
        <Form.Control type="dodId" placeholder="Enter DoD Id #" />
      </Form.Group>
      <Form.Group
        className="mb-5 mt-5"
        controlId="formBasicRank"
        onChange={(e) => setRank(e.target.value)}
      >
        <Form.Label>Rank</Form.Label>
        <Form.Control type="rank" placeholder="Enter Rank" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicLastName"
        onChange={(e) => setLast_name(e.target.value)}
      >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="l_name" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicFirstName"
        onChange={(e) => setFirst_name(e.target.value)}
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="f_name" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicEmail"
        onChange={(e) => setEmail(e.target.value)}
      >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Military Email" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicUnit"
        onChange={(e) => setUnit(e.target.value)}
      >
        <Form.Label>Unit</Form.Label>
        <Form.Control type="unit" placeholder="Enter Unit" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicOfficeSymbol"
        onChange={(e) => setOffice_symbol(e.target.value)}
      >
        <Form.Label>Office Symbol</Form.Label>
        <Form.Control type="office_symbol" placeholder="Enter Office Symbol" />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicAfsc"
        onChange={(e) => setAfsc(e.target.value)}
      >
        <Form.Label>AFSC</Form.Label>
        <Form.Control type="job_code" placeholder="AFSC" />
      </Form.Group>
      <Button className="mb-5" variant="secondary" type="submit">
        Submit
      </Button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
  );
};

export default AddMember;
