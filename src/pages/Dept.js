import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

function Dept() {
  return (
    <>
      <NavigationBar current={"dept"} />
      <div className="container">
        <Content />
      </div>
      <footer style={{ backgroundColor: "#1d3557", height: 15 }}></footer>
    </>
  );
}

export default Dept;
