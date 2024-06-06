import "./Pending1.scss";

//images
import icon from "../../Assets/Images/icon.png";
import img from "../../Assets/Images/img.png";
import koz from "../../Assets/Images/koz.png";
import sana from "../../Assets/Images/sana.png";
import vaqt from "../../Assets/Images/vaqt.png";
import images from "../../Assets/Images/images.png";

export default function Pending1() {
  return (
    <>
      <div className="container">
        <div className="pending1">
          <div className="pending1__top">
            <div className="pending1__list">
              <div className="pending1__item">
                <img className="pending1__pic" src={icon} alt="" />
              </div>
              <button className="pending1--btn">Dizayn</button>
              <h2 className="pending1--head">
                Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
              </h2>
            </div>
            <div className="pending1__item--items">
              <p className="pending1--text">
                {" "}
                <img src={img} alt="" width={10.67} height={12} /> Muallif:
                Jamshid Xoliqulov
              </p>
              <p className="pending1--text">
                {" "}
                <img src={sana} alt="" width={12} height={13.33} />
                1-oktyabr
              </p>
              <p className="pending1--text">
                {" "}
                <img src={vaqt} alt="" width={12} height={12} />3 soat oldin
              </p>
              <p className="pending1--text">
                {" "}
                <img src={koz} alt="" width={15} height={9} />
                546 ko’rildi
              </p>
            </div>
            <p className="pending1--texts">
              Yangi avlod interaktiv mahsulotlarini yaratish uchun hissiy
              tajribalarni loyihalash.
              <br />
              <br />
              Keling, teginish dunyosini o'rganamiz! Dizaynerlar va ishlab
              chiquvchilar bizning teginish sezgimizdan foydalanadigan
              tajribalarni yaratishi mumkin.
              <br />
              <br />
              Tegish sezuvchanlik sohasi eng tez rivojlanayotgan, lekin ayni
              paytda foydalanuvchilar tajribasining kam o'rganilgan sohalaridan
              biridir. Qurilmalar bilan kundalik aloqalarimiz klaviatura va
              sichqonchadan telefonga, avtomobil ichidagi ko'ngilochar
              tizimlarga va kundalik narsalarga o'tayotgani sayin, biz qanday
              aloqa qilishimiz va jismoniy dunyodan fikr-mulohazalarni qabul
              qilishimiz muhimroq bo'ladi.
            </p>

            <img
              className="pending1--img"
              src={images}
              alt=""
              width={716}
              height={394}
            />
          </div>
        </div>
      </div>
    </>
  );
}
