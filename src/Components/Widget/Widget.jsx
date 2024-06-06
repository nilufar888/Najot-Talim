import "./Widget.scss";

export default function Widget() {
  return (
    <>
      <div className="widget">
        <div className="widget__left">
          <div className="widget__left--item">
            <div className="widget__left--list">
              <p className="widget__left--text">Grafik dizayn</p>
              <h2 className="widget__left--head">Jasur Rashidov</h2>
              <p className="widget__left--title">
                Yaqinda men Najot ta’limda grafik dizayner sifatida o'qishni
                boshladim. Men darhol ustozlarning yaxshi ishini qayd etishim
                mumkin. Ular barcha boshlanuvchilarga kurs uchun pul to'lashda,
                hujjatlar bilan...
              </p>
              <a href="#" className="widget__left--link">
                Batafsil
              </a>
            </div>
          </div>
        </div>

        <div className="widget__right">
          <div className="widget__right--item">
            <div className="widget__right--list">
              <p className="widget__right--text">Marketing</p>
              <h2 className="widget__right--head">Nozima Murodova</h2>
              <p className="widget__right--title">
                Men barcha o’quv markazlar orasida Najot Ta’limni tanlaganimdan
                chin dildan xursandman. Uzoq vaqt qidirdim va o’ylimanki eng
                yaxshi jamoani topib bilim oldim. Barchaga tavsiya qilaman!
              </p>
              <a href="#" className="widget__right--link">
                Batafsil
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
