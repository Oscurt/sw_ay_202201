import React, { useState } from "react";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function singIn(){
    if(!loading){
      setLoading(true);
      fetch('http://localhost:3001/login', {
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
            localStorage.setItem('token', json.token);
            setLoading(false);
            window.location.href = "/home";
          } else{
            alert("fallo el inicio de sesion")
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    singIn();
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
          Login
        </Button>
      </Form>
    </div>
  );
}