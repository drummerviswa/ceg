import React from "react";
import Card from "react-bootstrap/Card";
import color from "../color/main";

const CardS = (props) => {
  return (
    <>
      <Card.Img
        style={{ height: "30px", width: "4.45vh" }}
        variant="top"
        src={props.img}
      />
      <Card
        style={{
          width: "50px",
          flex: 1,
          textAlign: "center",
          backgroundColor: props.color,
        }}
      >
        <Card.Title style={{ textAlign: "center", fontSize: 12 }}>
          {props.title}
        </Card.Title>
      </Card>
    </>
  );
};

export default CardS;
