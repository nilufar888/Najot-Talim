import "./Contact.scss";

//Components
import Header from "../Header/Header";
import Article from "../Article/Article";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Pend from "../Pend/Pend";
import Inner from "../Inner/Inner";
import Box from "../Box/Box";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <Article />
        <Navbar />
        <Sidebar />
        <Pend />
        <Inner />
        <Box />
        <Nav />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
