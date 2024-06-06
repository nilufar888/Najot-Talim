import "./Header1.scss";

//images
import image from "../../Assets/Images/image.png";
import { useNavigate } from "react-router-dom";

export default function Header1() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header1__top">
          <div className="header1__top--items">
            <p onClick={() => navigate("/")} className="header1__text">
              Bosh sahifa ➡
            </p>
            <p onClick={() => navigate("/blog")} className="header1__text">
              Blog➡
            </p>
            <p onClick={() => navigate("/education")} className="header1__text">
              Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
            </p>
          </div>
          <img className="header1__pic" src={image} alt="" />
        </div>
      </div>
    </>
  );
}
