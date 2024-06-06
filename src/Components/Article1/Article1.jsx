import { useNavigate } from "react-router-dom/dist";

//Components

import "./Article1.scss";

//images

export default function Article1() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="article1__top">
          <div className="article1__top--items">
            <p onClick={() => navigate("/")} className="article1__text">
              Bosh sahifa ➡
            </p>
            <p onClick={() => navigate("/about")} className="article1__text">
              Biz haqimizda
            </p>
          </div>
        </div>

        <div className="article1__wrapp">
          <h1 className="article1__head">Barcha o’quv kurslar </h1>
          <div className="article1__wrapp--links">
            <a
              onClick={() => navigate("/aboutus")}
              className="article1__wrapp--link1"
            >
              Biz haqimizda
            </a>
            <a
              onClick={() => navigate("/aboutus/Bizning jamoa")}
              className="article1__wrapp--link2"
            >
              Bizning jamoa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
