import React from "react";

import "./Home.scss";

import Hero from "../Hero/Hero";
import Wrapp from "../Wrapp/Wrapp";
import Pending from "../Pending/Pending";
import Wrapper from "../Wrapper/Wrapper";
import Widget from "../Widget/Widget";
import Content from "../Content/Content";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Wrapp />
      <div className="container">
        <Pending />
        <Wrapper />
        <Widget />
        <Content />
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default Home;
