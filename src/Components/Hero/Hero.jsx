import "./Hero.scss";
import "../Header/Header.scss";
import Logo from "../../Assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="hero__header">
        <div className="header-wrapp">
          <img OnClick={() => navigate("/")} src={Logo} alt="img" />

          <div className="header_right">
            <ul className="header-list">
              <li className="header-item">
                <a OnClick={() => navigate("/aboutus")} className="header-link">
                  Biz haqimizda
                </a>
              </li>
              <li className="header-item">
                <a OnClick={() => navigate("/blog")} className="header-link">
                  Blog
                </a>
              </li>
            </ul>

            <button className="header-btn">Kirish</button>
          </div>
        </div>

        <div className="hero">
          <div className="hero-wrapp">
            <div className="hero-left">
              <p className="hero-text"> Ilm va tajriba ulashamiz</p>
              <h1 className="hero-head">
                {" "}
                Shunchaki <br /> o’quv markazi emas,
                <br /> haqiqiy{" "}
                <span className="hero-span">professionallar</span> makoni
              </h1>
              <p className="hero-texts">
                O’zingizga investitiya kiritish vaqti, biz bilan birga boshlang!
              </p>
              <button onClick={() => navigate("/about")} className="hero-btn">
                Kursni tanlang ➡
              </button>
              <span className="hero-heads">⭐️Birinchi dars bepul!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
