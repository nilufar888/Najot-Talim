import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="nav__in">
            <div className="nav--top">
              <h4 className="nav--top__haed">Ko‘p so‘raladigan savollar</h4>
            </div>
            <ol>
              <li>
                <details>
                  <summary className="nav__sum">
                    Men hech qachon Flutter dasturida ishlab ko’rmaganman. Men
                    qila olamanmi?
                  </summary>
                  <p className="nav__texts">
                    Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                    darajadagi tillardan birini bilishingiz kerak. Boshqa
                    tomondan, tajribali ustozlar sizga kurs davomida sizni
                    nazorat qiladigan yordam beradi.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="nav__sum">
                    Mashg'ulotlar jadvali qanday? Siz kursni ishi borlar uchun
                    moslashtira olasizmi?
                  </summary>
                  <p className="nav__texts">
                    Siz dasturlash tajribasiga ega bo'lishingiz va yuqori d
                    className="nav__texts"arajadagi tillardan birini bilishingiz
                    kerak. Boshqa tomondan, tajribali ustozlar sizga kurs
                    davomida sizni nazorat qiladigan yordam beradi.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="nav__sum">
                    O'qishga haftada necha soat ajratishim kerak?
                  </summary>
                  <p className="nav__texts">
                    Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                    darajadagi tillardan birini bilishingiz kerak. Boshqa
                    tomondan, tajribali ustozlar sizga kurs davomida sizni
                    nazorat qiladigan yordam beradi.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="nav__sum">
                    O'qituvchilar bilan aloqa qila olamanmi?
                  </summary>
                  <p className="nav__texts">
                    Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                    darajadagi tillardan birini bilishingiz kerak. Boshqa
                    tomondan, tajribali ustozlar sizga kurs davomida sizni
                    nazorat qiladigan yordam beradi.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="nav__sum">
                    Bo’lib to'lash imkoni bormi?
                  </summary>
                  <p className="nav__texts">
                    Siz dasturlash tajribasiga ega bo'lishingiz va yuqori
                    darajadagi tillardan birini bilishingiz kerak. Boshqa
                    tomondan, tajribali ustozlar sizga kurs davomida sizni
                    nazorat qiladigan yordam beradi.
                  </p>
                </details>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
