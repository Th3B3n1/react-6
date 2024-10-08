import { useState, useEffect } from "react";
import { Fetch } from "./Fetch";

export function Methods()
{
    const [methods, setMethods] = useState([])
    useEffect(() =>
    {
        Fetch("/methods.json").then(data => setMethods(data))
    });
    
    return (
        <section className="mb-5">
            <h2>Az Autodidakta Tanulás Módjai</h2>
            <ul className="list-group">
                {methods.map((method, index) => <li key={index} className="list-group-item">{method}</li>)}
            </ul>
        </section>
    );
};