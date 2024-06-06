import "./Sidebar.scss";

//images
import sidimg from "../../Assets/Images/sidimg.png";

export default function Sidebar() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__top">
            <h2 className="sidebar__top__head">
              Kursdan qanday bilimlarni olasiz
            </h2>
            <div className="sidebar__top--list">
              <div className="sidebar__top--item">
                <div className="sidebar__top--pend">
                  <img className="sidebar__pic" src={sidimg} alt="" />
                  <h2 className="sidebar__top--heads">
                    Turli platformalar uchun ilovalarni ishlab chiqish
                  </h2>
                  <p className="sidebar__top--text">
                    Siz Android va iOS da bir xil ishlaydigan ilovalarni
                    yaratishingiz mumkin. Har bir platforma uchun bir nechta
                    dasturlash tillarini o'rganishingiz va ilovalarni noldan
                    yaratishingiz shart emas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar__top--list">
            <div className="sidebar__top--item">
              <div className="sidebar__top--pend">
                <img className="sidebar__pic" src={sidimg} alt="" />
                <h2 className="sidebar__top--heads">
                  Foydalanuvchi tajribasi bilan ishlash
                </h2>
                <p className="sidebar__top--text">
                  UX-ni tushuning va chiroyli va qulay foydalanuvchi
                  interfeyslarini yaratishni o'rganing.
                </p>
              </div>
            </div>
          </div>

          <div className="sidebar__top--list">
            <div className="sidebar__top--item">
              <div className="sidebar__top--pend">
                <img className="sidebar__pic" src={sidimg} alt="" />
                <h2 className="sidebar__top--heads">
                  Hot reload yuklashdan foydalaning
                </h2>
                <p className="sidebar__top--text">
                  Kodni o'zgartirganda, loyihani bir zumda tiklash orqali
                  rivojlanishni tezlashtiradigan, Flutter funksiyasini hot
                  reload bilan ishlashni o'rganing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
