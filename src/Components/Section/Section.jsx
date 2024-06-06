import "./Section.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

//images
import sulaymon from "../../Assets/Images/sulaymon.png";
import myunus from "../../Assets/Images/myunus.png";
import fotim from "../../Assets/Images/fotim.png";
import abdulwahid from "../../Assets/Images/abdulwahid.png";
import husan from "../../Assets/Images/husan.png";
import husayn from "../../Assets/Images/husayn.png";

export default function Section() {
  const navigate = useNavigate();

  const ref = useRef();

  // useEffect(() => {
  //   function time() {
  //     let clock = new Date();
  //     let hour = clock.getHours();
  //     let min = clock.getMinutes();
  //     let second = clock.getSeconds();

  //     ref.current.textContent = `${hour} : ${min} : ${second}`;

  //     setTimeout(time);
  //   }
  //   time();
  // }, []);

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="section__top">
            <div className="section__top--item">
              <p onClick={() => navigate("/")} className="section__text">
                Bosh sahifa ➡{" "}
              </p>
              <p onClick={() => navigate("/contact")} className="section__text">
                {" "}
                Kurslar
              </p>
            </div>
            <div className="section__wrapp">
              <h1 className="section__head">Barcha o’quv kurslar </h1>
              <div className="section__wrapp--links">
                <a
                  onClick={() => navigate("/about")}
                  className="section__wrapp--link1"
                >
                  online
                </a>
                <a
                  onClick={() => navigate("/about/offline")}
                  className="section__wrapp--link2"
                >
                  offline
                </a>
              </div>
            </div>
            <div className="section-list">
              <div className="section-item">
                <div className="section-item__items">
                  <h1 className="section-item-head">Dasturlash</h1>
                  <p className="section-item-text">12ta kurs</p>
                </div>

                <div className="section-items">
                  <h1 className="section-item-heads">Dizayn</h1>
                  <p className="section-item-text">5ta kurs</p>
                </div>

                <div className="section__items">
                  <h1 className="section-item-heads">Marketing</h1>
                  <p className="section-item-text">3ta kurs</p>
                </div>
                <div className="section__left--list2">
                  <h1 className="section__left--heading">
                    Marketing kursiga 30% chegirma
                  </h1>
                  <div className="section__left--right">
                    <p className="section__left--date">Start: 30.09.2024</p>
                    <div ref={ref} className="section__left--clock"></div>
                    <h1 className="section__left--clock">14:12:34</h1>
                    <a className="section__left--link">Kurslarni boshlash →</a>
                  </div>
                </div>
              </div>
              {/* <section-item> */}
              <div className="section__pend">
                <div className="section__pend--list">
                  <div className="section__pend--pend">
                    <h1
                      onClick={() => navigate("/contact")}
                      className="section__pend--heads"
                    >
                      Foundation
                    </h1>
                    <abbr
                      className="section__media"
                      title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi."
                    >
                      ⨀
                    </abbr>
                  </div>
                  <div className="section__pend--item">
                    <img className="section--pic" src={sulaymon} alt="" />
                    <h1 className="section__pend--head">Sulaymon Ne'matov</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 24 ta</p>
                    </div>
                  </div>
                </div>

                <div className="section__pend--lists">
                  <h1 className="section__pend--heads">Web dasturlash</h1>
                  <div className="section__pend--item">
                    <img className="section--pic" src={myunus} alt="" />
                    <h1 className="section__pend--head">Muhammad Yunus</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 12 ta</p>
                    </div>
                  </div>
                </div>

                <div className="section__pend--lists">
                  <div className="section__pend--pend">
                    <h1 className="section__pend--heads">Bootcamp</h1>
                    <abbr
                      className="section__media"
                      title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi."
                    >
                      ⨀
                    </abbr>
                  </div>
                  <div className="section__pend--item">
                    <img className="section--pic" src={fotim} alt="" />
                    <h1 className="section__pend--head">
                      Abduqahharova Fotima
                    </h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 16 ta</p>
                    </div>
                  </div>
                </div>

                <div className="section__pend--lists">
                  <div className="section__pend--pend">
                    <h1 className="section__pend--heads">Flutter</h1>
                    <abbr
                      className="section__medias"
                      title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi."
                    >
                      ⨀
                    </abbr>
                  </div>
                  <div className="section__pend--item">
                    <img className="section--pic" src={abdulwahid} alt="" />
                    <h1 className="section__pend--head">Saud Abdulwahed</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 18 ta</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <>pend</> */}

              <div className="section__pend">
                <div className="section__pend--list">
                  <div className="section__pend--pend">
                    <h1 className="section__pend--heads">Foundation</h1>
                    <abbr
                      className="section__media"
                      title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi."
                    >
                      ⨀
                    </abbr>
                  </div>
                  <div className="section__pend--item">
                    <img className="section--pic" src={husan} alt="" />
                    <h1 className="section__pend--head">Husan Musayev</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 16 ta</p>
                    </div>
                  </div>
                </div>

                <div className="section__pend--lists">
                  <h1 className="section__pend--heads">Backend</h1>
                  <div className="section__pend--item">
                    <img className="section--pic" src={husayn} alt="" />
                    <h1 className="section__pend--head">Muhammad Yunus</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 14 ta</p>
                    </div>
                  </div>
                </div>

                <div className="section__pend--lists">
                  <h1 className="section__pend--heads">
                    Kiberxavfsizlik va Raspberry Pi...
                  </h1>
                  <div className="section__pend--item">
                    <img className="section--pic" src={abdulwahid} alt="" />
                    <h1 className="section__pend--head">Saud Abdulwahed</h1>
                    <div className="section__pend--top">
                      <p className="section__pend--text">Davomiylik: 6 oy </p>
                      <p className="section__pend--text">Darslar soni: 24 ta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
