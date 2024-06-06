import "./Box.scss";

//images
import medal from "../../Assets/Images/medal.png";

export default function Box() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h4 className="box_head">Sertifikat</h4>
          <div className="box__in">
            <div className="box__list">
              <div className="box__item">
                <img src={medal} alt="" />
                <h4 className="box__item--head">Najot Ta’lim diplomi</h4>
              </div>
              <p className="box_item--text">
                Siz kursni tugatganingizni tasdiqlaydi va ishga kirishda
                qo'shimcha dalil bo'ladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
