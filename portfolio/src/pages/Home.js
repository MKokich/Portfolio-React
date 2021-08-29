import React from "react";
import Navlinks from "../components/Navbar";
import Main from "../components/Home";
import "../index.css";

function Home() {
  return (
    <div>
      <Navlinks />
      <Main />
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
