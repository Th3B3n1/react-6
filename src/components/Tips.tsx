import { useState, useEffect } from "react";
import { Fetch } from "./Fetch";

export function Tips()
{
    const [tips, setTips] = useState([])
    useEffect(() =>
    {
        Fetch("/tips.json").then(data => setTips(data))
    });

    return (
        <section className="mb-5">
            <h2>Tippek az Eredményes Autodidakta Tanuláshoz</h2>
            <ol className="list-group list-group-numbered">
                {tips.map((tip, index) => <li key={index} className="list-group-item">{tip}</li>)}
            </ol>
        </section>
    );
};