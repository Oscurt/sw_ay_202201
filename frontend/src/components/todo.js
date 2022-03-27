import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./todo.css";

export default function Todo(props) {
    const [loading, setLoading] = useState(false);

    async function deleteTodo(){
        if(!loading){
          setLoading(true);
          fetch(process.env.REACT_APP_BACKEND_HOST + ':' + process.env.REACT_APP_BACKEND_PORT + '/delete', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem('token'),
                id: props.data.id
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
                console.log(json)
            })
            .catch((error) => {
              console.error(error);
            });
          setLoading(false);
        }
      }

    function handleSubmit(event) {
        deleteTodo()
        event.preventDefault();
    }

    return (
        <div>
            <p>titulo: {props.data.titulo}</p>
            <p>desc: {props.data.descrip}</p>
            <Form onSubmit={handleSubmit}>
                <Button block size="lg" type="submit" >
                Eliminar
                </Button>
            </Form>
        </div>
    );
}