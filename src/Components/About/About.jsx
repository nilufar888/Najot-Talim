import "./About.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <Section />
      </div>
      <Footer />
    </>
  );
}

export default About;
