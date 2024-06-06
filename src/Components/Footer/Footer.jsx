import "./Footer.scss";

//images

import najoticon from "../../Assets/Images/najaticon.png";
import inticon from "../../Assets/Images/inticon.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="container"> */}
      <div className="footer">
        <div className="footer--pend">
          <div className="footer__left">
            <img className="footer--pic" src={najoticon} alt="" />
            <div className="footer--section">
              <h6 className="footer--heads">
                Saytda ishlatilgan ma’lumotlar, video kontentlar himoyalangan.
                Ularni yozib olish, ko'chirish, tarqatish mumkin emas, aks holda
                javobgarlikka tortilasiz!
              </h6>
              <span>
                © 2021.
                <br /> All rights reserved
              </span>
            </div>
          </div>
          <div className="footer__right">
            <ul className="footer__right--list">
              <li className="footer__right--item">
                <h6
                  onClick={() => navigate("/about")}
                  className="footer__right--head"
                >
                  KURSLAR
                </h6>
                <ul className="footer__items">
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      {" "}
                      Dizayn
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Dasturlash
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      {" "}
                      Marketing
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Xorijiy Tillar{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer__right--item">
                <h6
                  onClick={() => navigate("/about")}
                  className="footer__right--head"
                >
                  DASTURLASH
                </h6>
                <ul className="footer__items">
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/contact")}
                      className="footer__items--link"
                    >
                      Foundation
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Web Dasturlash
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Android Dasturlash
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      IOS Dasturlash
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer__right--item">
                <h6
                  onClick={() => navigate("/about")}
                  className="footer__right--head"
                >
                  DIZAYN
                </h6>
                <ul className="footer__items">
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Bootcamp Grafika Dizayni
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Bootcamp UX/UI Dizayn
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Grafika Dizayni
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Brending
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer__right--item">
                <h6
                  onClick={() => navigate("/about")}
                  className="footer__right--head"
                >
                  MARKETING
                </h6>
                <ul className="footer__items">
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Raqamli Marketing
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      SMM Pro
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Youtube
                    </a>
                  </li>
                  <li className="footer__items--item">
                    <a
                      onClick={() => navigate("/about")}
                      className="footer__items--link"
                    >
                      Targeting
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr className="footer--hr" />
            <div className="footer--bottom">
              <h6 className="footer--bottom--head">
                Toshkent shahri, Xadra maydoni, Sebzor ko'chasi{" "}
              </h6>

              <h6 className="footer--bottom--heads">Tarmoqlar:</h6>
              <h6 className="footer--bottom--head">Telefon raqam:</h6>
            </div>
            <div className="footer__bottom--list">
              <span className="footer--bottom--text">
                Mo'ljal: O'zbekiston davlat sirkining orqa tarafi, Milliy
                taomlar yonida.
              </span>
              <img className="footer__bootom--pic" src={inticon} alt="" />
              <a className="footer--bottom__link" href="tel+">
                +998 (71) 200-11-23
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </dibv> */}
    </>
  );
}
