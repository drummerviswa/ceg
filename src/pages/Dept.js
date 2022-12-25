import React from "react";
import Content from "../components/Content";
import NavigationBar from "../components/NavigationBar";

function Dept() {
  return (
    <div className="DEPPPPP">
      <NavigationBar current={"dept"} />
      <div className="container conted">
        <Content />
      </div>
      <footer style={{ backgroundColor: "#1d3557", height: 15 }}></footer>
    </div>
  );
}

export default Dept;
