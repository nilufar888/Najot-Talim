import "./AboutUs.scss";

//Components
import Header from "../Header/Header";
import Article1 from "../Article1/Article1";
import Wrapp1 from "../Wrapp1/Wrapp1";
import Content1 from "../Content1/Content1";
import Widget1 from "../Widget1/Widget1";
import Pend1 from "../Pend1/Pend1";
import Inner1 from "../Inner1/Inner1";
import Sidebar1 from "../Sidebar1/Sidebar1";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="container">
        <Article1 />
        <Wrapp1 />
        <Content1 />
        <Widget1 />
        <Pend1 />
        <Inner1 />
        <Sidebar1 />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
