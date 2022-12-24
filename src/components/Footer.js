import React from "react";
import color from "../color/main";

function Footer() {
  const name = "drummerviswa";

  return (
    <footer
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.tertiary,
        height: "50px",
        color: "aliceblue",
        width: "100%",
      }}
    >
      Copyright &copy;2022
      <br></br>
      All rights are reserved by {name}
    </footer>
  );
}

export default Footer;
