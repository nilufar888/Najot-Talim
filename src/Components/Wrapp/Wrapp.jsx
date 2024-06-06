import { useEffect, useRef } from "react";
import "./Wrapp.scss";

// Images

function Wrapp() {
  const ref = useRef();

  useEffect(() => {
    function time() {
      let clock = new Date();
      let hour = clock.getHours();
      let min = clock.getMinutes();
      let second = clock.getSeconds();

      ref.current.textContent = `${hour} : ${min} : ${second}`;

      setTimeout(time);
    }
    time();
  }, []);

  return (
    <div className="wrapp">
      <div className="wrapp__left">
        <div className="wrapp__left--item">
          <div className="wrapp__left--list">
            <p className="wrapp__left--text">Yangi +3 ta kurs</p>
            <h2 className="wrapp__left--head">Dasturlash</h2>
            <p className="wrapp__left--title">
              Sodda til bilan tushuntirilganda, insonlarga baxt eltuvchi, ularni
              muammolariga qulay yechim ko’rsatuvchi soha.
            </p>
            <a href="#" className="wrapp__left--link">
              Kurslarni tanlash →
            </a>
          </div>
        </div>
        <div className="wrapp__left--item2">
          <div className="wrapp__left--left">
            <h2 className="wrapp__left--heading">
              Marketing kursiga 30% chegirma
            </h2>
            <a href="#" className="wrapp__left--link">
              Kurslarni boshlash →
            </a>
          </div>
          <div className="wrapp__left--right">
            <p className="wrapp__left--date">Start: 01.05.2024</p>
            <div ref={ref} className="wrapp__left--clock"></div>
            <p className="wrapp__left--date wrapp__left--date2">
              {" "}
              daqiqa qoldi
            </p>
          </div>
        </div>
      </div>
      <div className="wrapp__right">
        <div className="wrapp__right-item">
          <div className="wrapp__right-list">
            <p className="wrapp__right-texts">Yangi +2 ta kurs</p>
            <h2 className="wrapp__right-heads">Dizayn</h2>
            <p className="wrapp__right-title">
              Doimiy ravishda rivojlanib boruvchi va tobora ko'proq raqobatni
              keltirib chiqaradigan jahon bozorida mahsulotni targ'ib qilishning
              eng samarali vositalaridan biri.
            </p>
            <a href="#" className="wrapp__right-link">
              Kurslarni tanlash →
            </a>
          </div>
        </div>

        <div className="wrapp__right-item2">
          <div className="wrapp__right-list2">
            <p className="wrapp__right-text">Yangi +4 ta kurs</p>
            <h2 className="wrapp__right-head">Marketing</h2>
            <p className="wrapp__right-title">
              Jamiyat uchun qadr-qiymati bor boʻlgan narsalarni yetkazish va
              ular bilan kommunikatsiya qilish uchun harakatlar yigʻindisi.
            </p>
            <a href="#" className="wrapp__right-link">
              Kurslarni tanlash →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapp;
