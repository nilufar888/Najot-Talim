import "./Inner.scss";

export default function Inner() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <div className="inner__in">
            <div className="inner--top">
              <h4 className="inner--top__haed">Kurs dasturi</h4>
            </div>
            <div className="inner--top--list">
              <p className="inner--top__text">
                Siz dasturlash tajribasiga ega bo'lishingiz va yuqori darajadagi
                tillardan birini bilishingiz kerak. Dastur onlayn ma'ruzalar va
                amaliy topshiriqlarga ega modullarni o'z ichiga oladi.
              </p>
              <div className="inner__top--items">
                <div className="inner__items--item">
                  <p className="inner__top--text">Darslar soni:</p>
                  <span className="inner__top__text">24ta</span>
                </div>
                <div className="inner__items--item">
                  <p className="inner__top--text">Online dars:</p>
                  <span className="inner__top__text">20ta</span>
                </div>
              </div>
            </div>
            <hr className="inner__hr" />
            <ol>
              <li>
                <details>
                  <summary className="inner__sum">Kirish</summary>
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="inner__sum">Dars 2 asoslari </summary>
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="inner__sum">Flutter</summary>
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="inner__sum">
                    StatefulWidget/StatelessWidget
                  </summary>
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="inner__sum">
                    Cupertino vs Material
                  </summary>
                  className="inner__texts"{" "}
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
                  </p>
                </details>
              </li>
              <li>
                <details>
                  <summary className="inner__sum">Layout</summary>
                  <p className="inner__texts">
                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                    Codestyling bilan tanishing.
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
