import "./Content1.scss";

// Images
import Group from "../../Assets/Images/Group.png";
import Frame from "../../Assets/Images/Frame.png";
import portful from "../../Assets/Images/portful.png";

export default function Content1() {
  return (
    <>
      <div className="container">
        <div className="content1">
          <h2 className="content1--head">Maqsadimiz yuqori</h2>
          <div className="content1__list">
            <div className="content1__item">
              <div className="content1__item--items">
                <img src={Group} alt="" />
                <h2 className="content1__head">Qiziquvchi yoshlarni topamiz</h2>
                <p className="contant1--text">
                  Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab juda
                  ham ortib ketdi. Sababi, IT sohasida yoshlarning diplomsiz ham
                  o’z mustahkam o’rniga ega bo’lishi, asosiy omillardan biri.
                  Shu sababli, biz IT sohasiga qiziqqan yoshlarni qidirib
                  topamiz.
                </p>
              </div>
            </div>

            <div className="content1__item">
              <div className="content1__item--items">
                <img src={Frame} alt="" />
                <br />
                <br />
                <h2 className="content1__head">O’qitamiz</h2>
                <p className="contant1--text">
                  Eng yaxshi investitsiya - bu ta’limga kiritilgan
                  investitsiyadir. Hozirgi texnologiya asrida IT sohasini
                  o’rganish “must have” hisoblanadi. Oliygohda 4 yil davomida
                  o’rganishi kerak bo’lgan narsani 1 yil ichida ham mukammal
                  o’rgansa bo’ladi va biz ishni amalga oshirish uchun harakat
                  qilamiz.
                </p>
              </div>
            </div>

            <div className="content1__item">
              <div className="content1__item--items">
                <img src={portful} alt="" />
                <h2 className="content1__head">O’qitamiz</h2>
                <p className="contant1--text">
                  6-10 oy davomida chuqurlashtirilgan ta’limni olgandan so’ng,
                  o’quvchida keng imkoniyatlar eshigi ochiladi. Asosiysi,
                  diplomsiz, hech qanday tanish-bilishsiz katta kompaniyalarda
                  faoliyat olib borishi mumkin bo’ladi va biz bu yo’lda
                  o’quvchilarimizga ko’mak bo’lamiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
