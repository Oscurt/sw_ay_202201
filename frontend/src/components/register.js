import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function singUp(){
    if(!loading){
      setLoading(true);
      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          pass: password
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          if(json.status){
            alert("Registrado con exito!");
          } else{
            alert("Fallo el registro :(");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    singUp()
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}