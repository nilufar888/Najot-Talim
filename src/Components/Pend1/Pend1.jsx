import "./Pend1.scss";

//images

export default function Pend1() {
  return (
    <>
      <div className="container">
        <div className="pend1">
          <div className="pend1__left">
            <div className="pend1__left--list">
              <div className="pend1__left--item">
                <h4 className="pend1__left--head">Kuchlilar bilan bo’ling!</h4>
                <p className="pend1__left--text">
                  Bizda o’z sohasining mutaxassislari faoliyat olib borishadi.
                  Sizni o’z safimizda ko’rishdan mamnun bo’lamiz.
                </p>
                <button className="pend1__left--btn">Hamkorlik qiling➡</button>
              </div>
            </div>
            <div className="pend1__right--list">
              <div className="pend1__right--item">
                <h4 className="pend1__right--head">Aloqa markazi</h4>
                <p className="pend1__right--text">
                  O’zingizni qiziqtirgan savollarga javob oling!
                </p>
                <span className="pend1__right__text">+998 (99) 828-00-11</span>
                <p className="pend1__right--text">08:00 dan 20:00 gacha</p>
                <button className="pend1__right--btn">
                  Qo'ng'iroq qiling➡
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
