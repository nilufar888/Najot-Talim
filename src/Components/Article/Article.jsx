import { useNavigate } from "react-router-dom/dist";
import "./Article.scss";

//images
import sulaymon from "../../Assets/Images/sulaymon.png";

export default function Article() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="article__top">
          <div className="article__top--items">
            <p onClick={() => navigate("/")} className="article__text">
              Bosh sahifa ➡
            </p>
            <p onClick={() => navigate("/about")} className="article__text">
              Kurslar ➡
            </p>
            <p onClick={() => navigate("/about")} className="article__text">
              {" "}
              Foundation
            </p>
          </div>

          <div className="article__wrapp">
            <div className="article--list">
              <div className="article--item">
                <h2 className="article__head">Foundation</h2>
                <p className="article--text">
                  Foundationni oʻqish davomida oʻquvchilar dasturlash
                  strukturasi, dasturlash mantigʻi, uning algoritmi, dastur
                  yaratilgandan keyin uning orqa fonida qanday jarayonlar
                  boʻlishini toʻliq anglab yetadi. Yana bir yangilik,
                  oʻquvchilar kurs davomida bonus sifatida ingliz tilidan ham
                  bilim olishlari taʼminlanadi.
                </p>

                <div className="article__top">
                  <div className="article__top__item">
                    <img src={sulaymon} alt="" width={24} height={24} />
                    <h2 className="article__heads">Sulaymon Ne'matov</h2>
                  </div>
                </div>

                <div className="article__top">
                  <div className="article__top--item">
                    <p className="article--texts">Davomiylik: 4 oy </p>
                    <p className="article--texts">Darslar soni: 24 ta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
