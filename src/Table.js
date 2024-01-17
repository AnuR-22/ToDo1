import React from "react"

export default function () {
    const data = [
        {
            name: "Anu",
            age: 23,
            salary: 5000
        },
        {
            name: "Sonu",
            age: 25,
            salary: 10000
        },
        {
            name: "BR",
            age: 20,
            salary: 20000
        },
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) =>
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.salary}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}