import React from "react";
import Content from "../components/Content";
import AnnaUniv from "../components/AnnaUniv";
import "../style/styles.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <NavigationBar current={"home"} />
        <div className="cover">
          <div className="content-in-cover">
            <AnnaUniv />
          </div>
        </div>
        <div className="container depp">
          <h1 style={{ textAlign: "start" }}>Departments:</h1>
          <Content />
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Home;
