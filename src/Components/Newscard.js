import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function Newscard() {
 const [myData, setmyData] = useState([]);
 const [search, setSearch] = useState("");

 useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=books&orderBy=newest'
      )
      .then((res) => {
        console.log(res.data);
        setmyData(res.data.items);
      });
 }, []);

 const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest'
      )
      .then((res) => {
        console.log(res.data);
        setmyData(res.data.items);
      });
 };

 return (
    <div className="card-group">
      <h1>Apidemo</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {myData &&
        myData.map((d) => (
          <div className="e-card e-card-horizontal" key={d.id}>
            <Card style={{ width: "18rem" }}>
              {/* Check if imageLinks exist before using them */}
              {d.volumeInfo.imageLinks && (
                <Card.Img
                 variant="top"
                 src={d.volumeInfo.imageLinks.thumbnail}
                />
              )}
              <Card.Body>
                <Card.Title>{d.volumeInfo.title}</Card.Title>
                <Card.Text>{d.volumeInfo.description ? d.volumeInfo.description.slice(0, 100) + "..."
                    : ""}.</Card.Text>
                <a href={d.volumeInfo.infoLink}>
                 <Button variant="primary">DETAILS</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
 );
}