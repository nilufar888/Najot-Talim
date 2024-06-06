import { useNavigate } from "react-router-dom";
import "./Piece.scss";

//images
import dizayn from "../../Assets/Images/dizayn.png";
import haptic from "../../Assets/Images/haptic.png";
import iphone from "../../Assets/Images/iphone.png";
import figma from "../../Assets/Images/figma.png";
import ilova from "../../Assets/Images/ilova.png";
import ux from "../../Assets/Images/ux.png";

export default function Piece() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="piece__wrapp">
          <div className="piece__wrapp--links">
            <a onClick={() => navigate("/")} className="piece__wrapp--link1">
              Barcha maqolalar
            </a>
            <a onClick={() => navigate("/")} className="piece__wrapp--link2">
              Dasturlash
            </a>
            <a onClick={() => navigate("/")} className="piece__wrapp--link2">
              Dizayn
            </a>{" "}
            <a onClick={() => navigate("/")} className="piece__wrapp--link2">
              Marketing
            </a>
          </div>
        </div>
        <br />
        <br />

        <div class="piece-list">
          <div className="piece-item">
            <img className="piece-img" src={dizayn} />
            <h1 className="piece--head">
              Dizayn naqshlari. Mukammal akkordeon yaratish
            </h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>

          <div
            onClick={() => navigate("/blog/education/")}
            className="piece-item"
          >
            <img className="piece-img" src={haptic} />
            <h1 className="piece--head">
              Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
            </h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>

          <div className="piece-item">
            <img className="piece-img" src={iphone} />
            <h1 className="piece--head">IPhone 13 ekran o'lchamlari</h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>
        </div>

        <div class="piece-lists">
          <div className="piece-items">
            <img className="piece-img" src={figma} />
            <h1 className="piece--head">
              Tezroq ishlash uchun 10 ta Figma maslahatlari
            </h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>

          <div className="piece-items">
            <img className="piece-img" src={ilova} />
            <h1 className="piece--head">
              Bu 5 ta ilova sizni yanada samarali dizayner qiladi
            </h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>

          <div className="piece-items">
            <img className="piece-img" src={ux} />
            <h1 className="piece--head">
              UX dizaynining 7 ta qonunlari (rasmlar bilan)
            </h1>
            <div className="piece__texts">
              <p className="piece--text">🕓3 soat oldin</p>
              <p className="piece--text">👁 546 ko’rildi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
