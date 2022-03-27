import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Todo from "../components/todo";

export default function Profile(props){
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([])
    const { id } = useParams();
    

    async function getTodo(){
        if(!loading){
          setLoading(true);
          fetch(process.env.REACT_APP_BACKEND_HOST + ':' + process.env.REACT_APP_BACKEND_PORT + '/todos', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
                var output = [];
                console.log(json)
                for(var i = 0; i < json.data.length; i++){
                    output.push(<Todo data={json.data[i]} />)
                }
                setTodos(output)
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

    return (
        <div>
            {todos}
        </div>
    );
}