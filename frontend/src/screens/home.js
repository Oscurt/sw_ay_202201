import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Todo from "../components/todo";

export default function Home(){
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);
    const [reload, setReload] = useState(false);

    function validateForm() {
        return title.length > 0 && desc.length > 0;
    }

    function refresh(){
      console.log("aca refrescando xd");
    }

    async function getTodo(){
        if(!loading){
          setLoading(true);
          fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: localStorage.getItem('token')
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
                var output = [];
                console.log(json)
                for(var i = 0; i < json.data.length; i++){
                    output.push(<Todo data={json.data[i]} onChange={refresh} />)
                }
                setTodos(output)
            })
            .catch((error) => {
              console.error(error);
            });
          setLoading(false);
        }
      }

      async function addTodo(){
        if(!loading){
          setLoading(true);
          fetch('http://localhost:3001/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: localStorage.getItem('token'),
              title: title,
              desc: desc
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
                console.log(json)
                setReload(true);
            })
            .catch((error) => {
              console.error(error);
            });
          setLoading(false);
        }
      }

    useEffect(() => {
        getTodo();
    }, []);

    useEffect(() => {
        getTodo();
        setReload(false);
    }, [reload]);

    function handleSubmit(event) {
        addTodo();
        event.preventDefault();
    }

    return (
        <div>
            <div className="Home">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Crear Tarea
                </Button>
            </Form>
            </div>
            <div>
                {todos}
            </div>
        </div>
    );
}