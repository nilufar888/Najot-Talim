import { useNavigate } from "react-router-dom";
import "./Article2.scss";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//images
import jasur from "../../Assets/Images/jasur.png";

export default function Article2() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container">
        <div className="article2__top">
          <div className="article2__top--items">
            <p onClick={() => navigate("/")} className="article2__text">
              Bosh sahifa ➡
            </p>
            <p onClick={() => navigate("/about")} className="article2__text">
              Biz haqimizda
            </p>
          </div>
        </div>

        <div className="article2__wrapp">
          <h1 className="article2__head">Najot Ta’lim </h1>
          <div className="article2__wrapp__links">
            <a
              onClick={() => navigate("/aboutus")}
              className="article2__wrapp--link1"
            >
              Biz haqimizda
            </a>
            <a
              onClick={() => navigate("/aboutus/Bizning jamoa")}
              className="article2__wrapp--link2"
            >
              Bizning jamoa
            </a>
          </div>
          <div class="article2-list">
            <div className="article2-item">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Muhammadxon Najimov</h1>
            </div>

            <div className="article2-item">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Muhammadjavohir Sur'atov</h1>
            </div>

            <div className="article2-item">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Saud Abdulwahed</h1>
            </div>
          </div>

          <div class="article2-lists">
            <div className="article2-items">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Muhammadxon Najimov</h1>
            </div>

            <div className="article2-items">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Muhammadjavohir Sur'atov</h1>
            </div>

            <div className="article2-items">
              <img className="harticle2-img" src={jasur} />
              <p className="article2--text">Veb dasturchi</p>
              <h1 className="article2--head">Saud Abdulwahed</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
