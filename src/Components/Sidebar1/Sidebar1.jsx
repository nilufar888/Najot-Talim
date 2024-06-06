import "./Sidebar1.scss";

//images

export default function Sidebar1() {
  return (
    <>
      <div className="container">
        <div className="sidebar1">
          <div class="sidebar1-item">
            <div class="sidebar1-item__items">
              <h1 class="sidebar1--item--head">
                Toshkent shahar, Xadra filiali
              </h1>
              <p class="sidebar1--item--text">+998 (71) 123-45-67</p>
              <p class="sidebar1--item--text">08:00 dan 20:00 gacha</p>
              <br />
              <p class="sidebar1--item--text">najot-talim@gmail.com </p>
              <p class="sidebar1--item--text">Ijtimoiy tarmoqlar:</p>
              <p class="sidebar1--item--text">t.me/najot_talim</p>

              <button className="sidebar1--btn">
                Istalgan paytda bog’laning
              </button>
            </div>

            <div class="sidebar1--item__items">
              <h1 class="sidebar1--item--head">
                Toshkent shahar, Chimboy filiali
              </h1>
              <p class="sidebar1--item--text">+998 (71) 123-45-67</p>
              <p class="sidebar1--item--text">08:00 dan 20:00 gacha</p>
              <br />
              <p class="sidebar1--item--text">najot-talim@gmail.com </p>
              <p class="sidebar1--item--text">Ijtimoiy tarmoqlar:</p>
              <p class="sidebar1--item--text">t.me/najot_talim</p>

              <button className="sidebar1--btn">
                Istalgan paytda bog’laning
              </button>
            </div>
            <div class="sidebar1-item--items">
              <h1 class="sidebar1--item--head">
                Toshkent shahar, Chilonzor filiali
              </h1>
              <p class="sidebar1--item--text">+998 (71) 123-45-67</p>
              <p class="sidebar1--item--text">08:00 dan 20:00 gacha</p>
              <br />
              <p class="sidebar1--item--text">najot-talim@gmail.com </p>
              <p class="sidebar1--item--text">Ijtimoiy tarmoqlar:</p>
              <p class="sidebar1--item--text">t.me/najot_talim</p>

              <button className="sidebar1--btn">
                Istalgan paytda bog’laning
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
