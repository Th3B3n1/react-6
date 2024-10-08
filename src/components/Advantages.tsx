import { useEffect, useState } from "react";
import { Fetch } from "./Fetch";

interface Advantages
{
    id: number,
    name: string,
    description: string
}

export function Advantages()
{
    const [advantages, setAdvantages] = useState([] as Advantages[])
    useEffect(() =>
    {
        Fetch("/advantages.json").then(data => setAdvantages(data))
    });

    return (
        <section className="mb-5">
            <h2>Az Autodidakta Tanulás Előnyei</h2>
            <table className="table table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>#</th>
                        <th>Előny</th>
                        <th>Leírás</th>
                    </tr>
                </thead>
                <tbody>
                    {advantages.map((advantage, index) => 
                    {
                        return (
                            <tr key={index}>
                                <td>{advantage.id}</td>
                                <td>{advantage.name}</td>
                                <td>{advantage.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
};