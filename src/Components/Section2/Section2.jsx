import { useNavigate } from "react-router-dom";

//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Section2() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container">
        <div className="section">
          <div className="section__top">
            <div className="section__top--item">
              <p onClick={() => navigate("/")} className="section__text">
                Bosh sahifa ➡
              </p>
              <p onClick={() => navigate("/about")} className="section__text">
                Kurslar
              </p>
            </div>
            <div className="section__wrapp">
              <h1 className="section__head">Barcha o’quv kurslar </h1>
              <div className="section__wrapp--links">
                <a
                  onClick={() => navigate("/about")}
                  className="section__wrapp--link2"
                >
                  online
                </a>
                <a
                  onClick={() => navigate("/about/offline")}
                  className="section__wrapp--link1"
                >
                  offline
                </a>
              </div>
            </div>
            <h2>offline</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
