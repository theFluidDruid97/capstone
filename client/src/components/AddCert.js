import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddCert = () => {
  const [training_name, setTraining_name] = useState("");
  const [cert_duration, setCert_duration] = useState("");
  const [message, setMessage] = useState("");

  let addSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          training_name: training_name,
          cert_duration: cert_duration,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTraining_name("");
        setCert_duration("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={addSubmit}>
      <Form.Group
        className="mb-5 mt-5"
        controlId="formBasicTraining_name"
        onChange={(e) => setTraining_name(e.target.value)}
      >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="title"
          placeholder="Enter Certification/Training Name"
        />
      </Form.Group>
      <Form.Group
        className="mb-5"
        controlId="formBasicCert_duration"
        onChange={(e) => setCert_duration(e.target.value)}
      >
        <Form.Label>Frequency</Form.Label>
        <Form.Control
          type="frequency"
          placeholder="Enter Certification/Training Frequency (In Months)"
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </Form>
  );
};

export default AddCert;
