import "./Content.scss";

//images

import yoshlarishag from "../../Assets/Images/yoshlarishag.png";
import abutech from "../../Assets/Images/abutech.png";
import techjobs from "../../Assets/Images/techjobs.png";
import kunuz from "../../Assets/Images/kunuz.png";
import Eduaction from "../../Assets/Images/Eduaction.png";
import osmondagibolalar from "../../Assets/Images/osmondagibolalar.png";
import faktor from "../../Assets/Images/faktor.png";
import millatumidi from "../../Assets/Images/millatumidi.png";
import Cambridge1 from "../../Assets/Images/Cambridge1.png";
import PCG from "../../Assets/Images/PCG.png";
import dinay from "../../Assets/Images/dinay.png";
import Cambridge2 from "../../Assets/Images/Cambridge2.png";
import Cambridge3 from "../../Assets/Images/Cambridge3.png";
import Fido from "../../Assets/Images/Fido.png";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="content__in">
          <div className="content--left">
            <div className="content--list">
              <p className="content--text">Yolg’iz emasmiz</p>
              <h4 className="content--head">Bizning hamkorlar</h4>
              <p className="content--span">
                Yodingizda tuting, biz siz bilan hamkorlik qilishdan doimo
                xursandmiz va sizga o‘z minnatdorchiligimizni bildiramiz!
              </p>
            </div>
            <div className="content--right">
              <div className="content--right-item">
                <img
                  src={yoshlarishag}
                  alt=""
                  width={112.36}
                  height={24.02}
                  className="content--img"
                />
                <img
                  src={abutech}
                  alt=""
                  mwidth={117.75}
                  height={24.02}
                  className="content--img"
                />
                <img
                  src={techjobs}
                  alt=" "
                  width={130.93}
                  height={24.02}
                  className="content--img"
                />
                <img
                  src={kunuz}
                  alt=""
                  width={61.28}
                  height={24.02}
                  className="content--img"
                />
                <img
                  src={Eduaction}
                  alt=""
                  width={55.6}
                  height={40.03}
                  className="content--img"
                />
              </div>

              <div className="content--right-item">
                <img
                  src={osmondagibolalar}
                  alt=""
                  width={64}
                  height={40.03}
                  className="content--img"
                />
                <img
                  src={faktor}
                  alt=""
                  width={67.82}
                  height={40.03}
                  className="content--img"
                />
                <img
                  src={millatumidi}
                  alt=""
                  width={48.91}
                  height={43.37}
                  className="content--img"
                />
                <img
                  src={Cambridge1}
                  alt=""
                  width={56.67}
                  height={50.04}
                  className="content--img"
                />
                <img
                  src={PCG}
                  alt=""
                  width={82.91}
                  height={53.38}
                  className="content--img"
                />
              </div>

              <div className="content--right-item">
                <img
                  src={dinay}
                  alt=""
                  width={82.74}
                  height={40.03}
                  className="content--img"
                />
                <img
                  src={Cambridge2}
                  alt=""
                  width={154.13}
                  height={86.74}
                  className="content--img"
                />
                <img
                  src={Cambridge3}
                  alt=""
                  width={126.33}
                  height={40.03}
                  className="content--img"
                />
                <img
                  src={Fido}
                  alt=""
                  width={110.62}
                  height={30}
                  className="content--img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
