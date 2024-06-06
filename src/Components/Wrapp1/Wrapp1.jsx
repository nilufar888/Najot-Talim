import "./Wrapp1.scss";

// Images
import najottalim from "../../Assets/Images/najottalim.png";
import temur from "../../Assets/Images/temur.png";
import googl from "../../Assets/Images/googl.png";
import insta from "../../Assets/Images/insta.png";
import twitter from "../../Assets/Images/twitter.png";
import facebook from "../../Assets/Images/facebook.png";

export default function Wrapp1() {
  return (
    <>
      <div className="container">
        <div className="wrapp1">
          <div className="wrapp1__top">
            <div className="wrapp1__top--list">
              <div className="wrapp1__top--item">
                <div className="wrapp1__top__items">
                  <div className="wrapp1__list--item">
                    <img src={najottalim} alt="" width={125} height={100} />
                    <p className="wrapp1__top--text">Markaz haqida</p>
                    <h1 className="wrapp1__top--head">
                      Hammasi 2018-yildan boshlangan
                    </h1>
                  </div>
                </div>

                <p className="wrapp1__top--texts">
                  2018-yil 1-oktabr Najot Ta’limga asos solingan kun. Dastlab
                  markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar
                  toʻlishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa
                  guruhlar soni bir necha barobar ortib, ikkinchi filial ham ish
                  boshladi. Quvonarlisi, markazimiz bitiruvchilari yurtimizning
                  turli xil tashkilotlarida, IT korxonalarda oʻz oʻrnini topdi.
                  Maqsadimiz, bir necha yillardan soʻng ham bosib oʻtilgan
                  yoʻlning qiymati va qimmati qalblarimizni faqat va faqat faxr
                  va shukronaga toʻldirsin!
                </p>
              </div>

              <div className="wrapp1__top--item">
                <div className="wrapp1__top--item--items">
                  <img src={temur} alt="" width={100} height={100} />
                  <p className="wrapp1__top--text">Markaz asoschisi</p>
                  <h1 className="wrapp1__top--head">Temurbek Adhamov</h1>
                </div>
                <p className="wrapp1__top--texts">
                  1994-yil 31-avgustda Farg’ona viloyatining Quva tumanida
                  tavallud topgan. 2015-2019-yillarda Toshkent shahridagi Imom
                  Al-Buxoriy nomidagi Islom institutini tamomlagan. 2018-yil
                  1-oktyabrda Najot Ta’limga asos solgan. Hozirgi kunga kelib
                  filiallar soni 2 taga yetdi. Undan tashqari, Abutech digital
                  kompaniyasi, Osmondagi bolalar loyihasini ham asoschisi
                  hisoblanadi.
                </p>
                <h1>Ijtimoiy tarmoqlar</h1>
                <img src={googl} alt="" width={32} height={32} />
                <img src={insta} alt="" width={32} height={32} />
                <img src={twitter} alt="" width={32} height={32} />
                <img src={facebook} alt="" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
