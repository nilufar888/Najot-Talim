import "./Navbar.scss";
import { useState } from "react";

//images
import www from "../../Assets/Images/www.png";
import list from "../../Assets/Images/list.png";
import media from "../../Assets/Images/media.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar__top">
            <div className="navbar__top--item">
              <p onClick={() => navigate("/")} className="navbar--texts">
                Kurs kim uchun mo’ljallangan{" "}
              </p>
              <p className="navbar__texts">Kursdan qanday bilimlarni olasiz</p>
              <p className="navbar__texts">Kurs qanday tartibda o’tiladi</p>
              <p className="navbar__texts">Kurs dasturi</p>
              <p className="navbar__texts">Sertifikat</p>
              <p className="navbar__texts">Ko‘p so‘raladigan savollar</p>
            </div>
            <hr className="navbar--hr" />
          </div>
          <h2 className="navbar__head">Kurs kim uchun mo'ljallangan</h2>

          <div className="navbar__list">
            <div className="navbar__items">
              <div className="navbar__item--items">
                <img src={www} alt="" width={52} height={59} />
                <h2 className="navbar--head">Asl dasturchi uchun</h2>
              </div>
              <p className="navbar--text">
                Bir platformadan o'ting chegaralarni buzing va bir universal
                dasturchiga aylaning. Ishlaydigan prototiplarni yaratishni va
                Flutterda loyihalarini bajarishni o'rganing. Master Dart va
                portfoliyangizga yangi ilovalarni qo'shing. Android va iOS uchun
                shaxsiy loyihalarni qayta yozing, o'z kompaniyangizda tizimni
                amalga oshirishni taklif qiling yoki yangi jamoaga qo'shiling.
              </p>
            </div>
            <div className="navbar__items">
              <div className="navbar__item--items">
                <img src={list} alt="" width={52} height={59} />
                <h2 className="navbar--tittle">
                  Boshqa yo'nalishdagi dasturchilar
                </h2>
              </div>
              <p className="navbar--text">
                Mobil ilovalarni ishlab chiqish va sinovdan o'tkazish
                xususiyatlari haqida bilib oling. Dart, Flutter framework bilan
                tanishing va platformalararo portfel ilovalarini yozing. Kursni
                tugatgandan so'ng, siz yo'nalishni o'zgartirib, mobil
                rivojlanish bo'yicha karerani boshlashingiz mumkin bo'ladi.
              </p>
            </div>

            <div className="navbar__item">
              <h2 className="navbar--tittles">Kurs narxi</h2>
              <h2 className="navbar--tittles">2 400 000 so’m</h2>
              <div className="navbar__item--item">
                <p className="navbar--subtittle">3 ga bo’lim to’lash imkoni</p>
                <p className="navbar--subtittle">
                  Boshlanish vaqti: 30.10.2021
                </p>
              </div>
              <hr className="navbar__hr" />
              <div className="navbar__item--item">
                <p className="navbar--subtittle">800 so’m / oyiga</p>
                <p className="navbar--subtittle">4 ta joy qoldi</p>
              </div>
              <div className="navbar__item--item">
                <img src={media} alt="" width={20} height={20} />
                <p className="navbar--subtittles">Oldindan ko’rish</p>
                <button
                  className="navbar__btn"
                  onClick={() => setModal(!modal)}
                >
                  Sotib olish➡
                </button>
                <dialog open={modal}>
                  <div className="navbar--list">
                    <p>Kurslarni sotib olish➡</p>
                    <p>To'lov tasdiqlash</p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
