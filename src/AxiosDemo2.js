import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function AxiosDemo2() {
  const [myData, setmyData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=5c91ecf045fa4b7d966640ae54572f05"
      )
      .then((res) => {
        console.log(res.data);

        setmyData(res.data.sources);
      });
  }, []);
  return (
    <div className="card-group">
      <h1>Apidemo</h1>
      {myData &&
        myData.map((d) => {
          return (
            <div className="e-card e-card-horizontal">
              <Card
                style={{ width: "18rem" }}
                className="e-card e-card-horizontal"
              >
                <Card.Img variant="top" src="./logo192.png" />
                <Card.Body>
                  <Card.Title>{d.id}</Card.Title>
                  <Card.Text >{d.description.slice(0,25)}.</Card.Text>
                  <a href={d.url}>
                    <Button variant="primary">DETAILS</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}