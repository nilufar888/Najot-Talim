import "./Pending.scss";

//imges

import pendingimg from "../../Assets/Images/pendingimg.png";
import pendingimgs from "../../Assets/Images/pendingimgs.png";
import pendingimg2 from "../../Assets/Images/pendingimg2.png";

export default function Pending() {
  return (
    <>
      <div className="pending">
        <div className="pending--pend">
          <p className="pending--subtitle">Kelajak kasblari</p>
          <h2 className="pending-heading">
            Kategoriyalar bo'yicha tanlangan mavzular
          </h2>
          <div className="pending--pend_list">
            <div className="pending-global">
              <div className="pending-top">
                <img src={pendingimg} alt="" />
                <h3 className="pending-text">Dasturlash</h3>
              </div>

              <ul className="pending-item">
                <li className="pending--list">
                  <h3 className="pending--head">Python</h3>
                  <p className="pending--lists">Boshlanish vaqti: 30.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">Bootcamp</h3>
                  <p className="pending--lists">Boshlanish vaqti: 21.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">Foundation</h3>
                  <p className="pending--lists">Boshlanish vaqti: 25.09.2021</p>
                </li>
              </ul>
              <a href="#" className="pending__link">
                Barcha kurslarni ko’rish→
              </a>
            </div>

            <div className="pending-global">
              <div className="pending-top">
                <img src={pendingimgs} alt="" />
                <h3 className="pending-text">Dizayn</h3>
              </div>

              <ul className="pending-item">
                <li className="pending--list">
                  <h3 className="pending--head">Brending</h3>
                  <p className="pending--lists">Boshlanish vaqti: 28.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">Grafik dizayn</h3>
                  <p className="pending--lists">Boshlanish vaqti: 22.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">Bootcamp UX/UI Dizayn</h3>
                  <p className="pending--lists">Boshlanish vaqti: 23.09.2021</p>
                </li>
              </ul>
            </div>

            <div className="pending-global">
              <div className="pending-top">
                <img src={pendingimg2} alt="" />
                <h3 className="pending-text">Marketing</h3>
              </div>

              <ul className="pending-item">
                <li className="pending--list">
                  <h3 className="pending--head">Raqamli Marketing</h3>
                  <p className="pending--lists">Boshlanish vaqti: 27.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">SMM Pro</h3>
                  <p className="pending--lists">Boshlanish vaqti: 19.09.2021</p>
                </li>
                <li className="pending--list">
                  <h3 className="pending--head">Targeting</h3>
                  <p className="pending--lists">Boshlanish vaqti: 21.09.2021</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
