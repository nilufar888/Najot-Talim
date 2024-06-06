import "./Aside.scss";

//images
import najottalim from "../../Assets/Images/najottalim.png";
import asideleft from "../../Assets/Images/asideleft.png";
import asideicon from "../../Assets/Images/asideicon.png";

export default function Aside() {
  return (
    <>
      <div className="aside">
        <div className="aside__in">
          <div className="aside--left">
            <div className="aside-item">
              <img className="aside-img" src={najottalim} alt="" />
              <h5 className="aside-head">Najot ta'lim</h5>
              <p className="aside-text">
                Zamonaviy kasbni biz bilan o’rganing va o’z faoliyatingizni
                boshlang
              </p>
              <a href="#" className="aside-link">
                Batafsil →
              </a>

              <ul className="aside--right-item">
                <li className="aside-list">Bitiruvchilarimiz</li>
                <li className="aside-lists">+400</li>
                <li className="aside-list">O‘quvchilarimiz</li>
                <li className="aside-lists">+800</li>
                <li className="aside-list">Ustozlarimiz</li>
                <li className="aside-lists">+30</li>
              </ul>
            </div>

            <div className="aside-right">
              <div className="aside-right-list">
                <img src={asideleft} alt="" />
                <img className="aside-right-pic" src={asideicon} alt="" />
                <h5 className="aside-right--head">
                  Agar siz bizning oilamizga qo'shilish istagida bo‘lsangiz,
                  bizning eshigimiz siz uchun doimo ochiq
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
