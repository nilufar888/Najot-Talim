import "./Inner1.scss";
//images
import googl from "../../Assets/Images/googl.png";
import insta from "../../Assets/Images/insta.png";
import twitter from "../../Assets/Images/twitter.png";
import facebook from "../../Assets/Images/facebook.png";
import xarita from "../../Assets/Images/xarita.png";

export default function Inner1() {
  return (
    <>
      <div className="container">
        <div className="inner1">
          <div className="inner1__left">
            <div className="inner1__left--list">
              <div className="inner1__left--item">
                <h4 className="inner1__left--head">Biz bilan bog’laning</h4>
                <hr className="inner1__hr" />
                <p className="inner1__left--text">Bizning raqam</p>
                <span className="inner1__left--texts">+998 (71) 123-45-67</span>
                <hr className="inner1__hr" />
                <p className="inner1__left--text">Ish vaqti</p>
                <span className="inner1__left--texts">
                  08:00 dan 20:00 gacha
                </span>
                <hr className="inner1__hr" />
                <p className="inner1__left--text">Elektron pochta</p>
                <span className="inner1__left--texts">
                  najot-talim@gmail.com
                </span>
                <hr className="inner1__hr" />
                <br />
                <p className="inner1__left--text">Ijtimoiy tarmoqlar</p>
                <img className="iner1__pic" src={insta} alt="" />
                <img className="iner1__pic" src={googl} alt="" />
                <img className="iner1__pic" src={twitter} alt="" />
                <img className="iner1__pic" src={facebook} alt="" />
                <br />
                <button className="inner1__btn">
                  Istalgan paytda bog’laning
                </button>
              </div>
              <div className="inner1__right--item">
                <img className="inner1--img" src={xarita} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
