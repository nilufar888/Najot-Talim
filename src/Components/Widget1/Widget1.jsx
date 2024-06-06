import "./Widget1.scss";

//images

import pendingimg from "../../Assets/Images/pendingimg.png";
import pendingimgs from "../../Assets/Images/pendingimgs.png";
import pendingimg2 from "../../Assets/Images/pendingimg2.png";
import talabalar from "../../Assets/Images/talabalar.png";
import bitiruvchilar from "../../Assets/Images/bitiruvchilar.png";
import ishchilar from "../../Assets/Images/ishchilar.png";

export default function Widget1() {
  return (
    <>
      <div className="container">
        <div className="widget1">
          <h3 className="widget1__head">Raqamlar statistikasida</h3>
          <div className="widget1__top">
            <div className="widget1--list">
              <div className="widget1--item">
                <img src={pendingimg} alt="" />
                <h3 className="widget1-text">Dasturlash</h3>
              </div>

              <div className="widget1--item">
                {" "}
                <img src={pendingimgs} alt="" />
                <h3 className="widget-text">Dizayn</h3>
              </div>

              <div className="widget1--item">
                <img src={pendingimg2} alt="" />
                <h3 className="widget-text">Marketing</h3>
              </div>
            </div>
            <div className="widget1--item">
              <h3 className="widget1--head">Talabalar</h3>
              <h3 className="widget1--head">Bitiruvchilar</h3>
              <h3 className="widget1--head">Ishga joylashganlar</h3>
            </div>

            <div className="widget1--item--items">
              <img src={talabalar} alt="" />
              <img src={bitiruvchilar} alt="" />
              <img src={ishchilar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
