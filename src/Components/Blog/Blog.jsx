import "./Blog.scss";

//Components
import Header from "../Header/Header";
import Hero1 from "../Hero1/Hero1";
import Piece from "../Piece/Piece";
import Pend1 from "../Pend1/Pend1";
import Footer from "../Footer/Footer";

function Blog() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero1 />
        <Piece />
        <Pend1 />
      </div>
      <Footer />
    </>
  );
}

export default Blog;
