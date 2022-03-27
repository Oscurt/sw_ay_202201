import React, { useState } from "react";

import "./sign.css"
import Register from '../components/register';
import Login from '../components/login';

export default function Sign(){
    const [status, setStatus] = useState(false);
    
    return status ? (
        <div>
            <Login />
            <button className="Btnchange" onClick={() => setStatus(!status)}>
                Registrate
            </button>
        </div>
    ) : (
        <div>
            <Register />
            <button className="Btnchange" onClick={() => setStatus(!status)}>
                Iniciar sesion
            </button>
        </div>
    );
}