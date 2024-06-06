import "./Box1.scss";

//images
import figma from "../../Assets/Images/figma.png";
import ilova from "../../Assets/Images/ilova.png";
import ux from "../../Assets/Images/ux.png";

export default function Box1() {
  return (
    <>
      <div className="container">
        <h4 className="piece--head">Mavzuga doir maqolalar</h4>
        <div className="piece-lists">
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
