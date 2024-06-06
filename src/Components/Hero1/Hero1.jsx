import { useNavigate } from "react-router-dom/dist";

import "./Hero1.scss";

//images
import tel from "../../Assets/Images/tel.png";
import zal from "../../Assets/Images/zal.png";
import savdo from "../../Assets/Images/savdo.png";

export default function Hero1() {
  //   const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="hero1">
          <div className="hero1__left">
            <img src={tel} alt="" />
          </div>
          <div className="hero1__right">
            <img
              className="hero1__pic"
              src={zal}
              alt=""
              width={520}
              height={188}
            />
            <img
              className="hero1__pic"
              src={savdo}
              alt=""
              width={520}
              height={188}
            />
          </div>
        </div>
      </div>
    </>
  );
}
