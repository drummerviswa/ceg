import React from "react";
import "../style/styles.css";
import "../App.css";
import color from "../color/main";

const AnnaUniv = () => {
  return (
    <div className="textt">
      <div style={{ color: "white" }} className="containery">
        <h1
          style={{
            textDecoration: "underline",
            textAlign: "center",
            fontWeight: "bold",
            textDecorationColor: color.main_assent,
            fontSize: 70,
          }}
        >
          College of Engineering - Guindy
        </h1>
        <h2 style={{ color: `white`, fontSize: 25 }}>
          Anna University, Chennai
        </h2>
      </div>
    </div>
  );
};

export default AnnaUniv;
