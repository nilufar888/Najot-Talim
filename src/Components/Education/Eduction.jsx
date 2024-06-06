import "./Education.scss";

//Components
import Header from "../Header/Header";
import Header1 from "../Header1/Header1";
import Pending1 from "../Pending1/Pending1";
import Navbar1 from "../Navbar1/Navbar1";
import Box1 from "../Box1/Box1";
import Footer from "../Footer/Footer";

function Education() {
  return (
    <>
      <Header />
      <div className="container">
        <Header1 />
        <Pending1 />
        <Navbar1 />
        <Box1 />
      </div>
      <Footer />
    </>
  );
}

export default Education;
