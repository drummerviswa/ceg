import React from "react";
import Card from "react-bootstrap/Card";

const CardB = (props) => {
  return (
    <Card
      className="animate__animated animate__pulse"
      style={{ width: "18rem" }}
    >
      <a
        style={{ textDecoration: "none" }}
        href={props.link}
        rel="noreferrer"
        target="_blank"
      >
        <Card.Img
          style={{ height: "150px", width: "287px" }}
          variant="top"
          src={props.img}
        />
      </a>
      <Card.Body style={{ height: "100px", flex: 1 }}>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text>{props.descr}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardB;
