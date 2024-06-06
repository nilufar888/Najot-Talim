import "./Pend.scss";

//images
import math1 from "../../Assets/Images/math1.png";
import math2 from "../../Assets/Images/math2.png";
import math3 from "../../Assets/Images/math3.png";
import math4 from "../../Assets/Images/math4.png";

export default function Pend() {
  return (
    <>
      <div className="container">
        <div className="pend">
          <div className="pend__top">
            <h3 className="pend__head">Kurs qanday tartibda o’tiladi</h3>
            <div className="pend__list">
              <div className="pend__item">
                <img className="pend__pic" src={math1} alt="" />
                <h3 className="pend__top--heads">Mavzu o’rganib chiqiladi</h3>
                <p className="pend__top--text">
                  Video darslarda orqali amaliyot qilinadi.
                </p>
                <div className="pend__item">
                  <img className="pend__pic" src={math2} alt="" />
                  <h3 className="pend__top--heads">Mavzu o’rganib chiqiladi</h3>
                  <p className="pend__top--text">
                    Video darslarda orqali amaliyot qilinadi.
                  </p>
                </div>
              </div>

              <div className="pend__item">
                <img className="pend__pic" src={math3} alt="" />
                <h3 className="pend__top--heads">Mavzu o’rganib chiqiladi</h3>
                <p className="pend__top--text">
                  Video darslarda orqali amaliyot qilinadi.
                </p>
                <div className="pend__item">
                  <img className="pend__pic" src={math4} alt="" />
                  <h3 className="pend__top--heads">Mavzu o’rganib chiqiladi</h3>
                  <p className="pend__top--text">
                    Video darslarda orqali amaliyot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
