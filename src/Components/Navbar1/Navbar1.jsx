import "./Navbar1.scss";

//images

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar1">
          <div className="navbar1--list">
            <div className="navbar1--item">
              <h3 className="navbar1--head">1. Taktiv sezish nima?</h3>
              <p className="navbar1--text">
                Taktil sezish deganda teginish aloqasiga aloqa shakli sifatida
                e'tibor qaratadigan kinestetik aloqa sohasi tushuniladi. Taktik
                sezgilar hamma joyda mavjud va jonli tuyg'u beradi. Tasavvur
                qiling -a, chaqalog'ingizni birinchi marta ushlab turing, uzoq
                vaqt ko'rmagan do'stingizni quchoqlang yoki cho'ntagingizda
                telefoningiz tez tebranayotganini his eting. Bu his -tuyg'ular
                bizda qoladigan haqiqiy his -tuyg'ularni keltirib chiqaradi.
              </p>

              <h3 className="navbar1--heads">
                Тактильный пользовательский опыт (Haptic UX) использует
                тактильный фидбек, чтобы через прикосновение передать
                пользователю своевременную и полезную информацию.
              </h3>
              <p className="navbar1__text">
                Mana, teginish sezgilarini ishlatishga misollar:
              </p>
              <ul className="navbar1__item">
                <li className="navbar1__list1">
                  Qisqa muddatli tebranishni keltirib chiqaradigan mobil
                  qurilmada muvaffaqiyatli to'lov.
                </li>
                <li className="navbar1__list1">
                  Noto'g'ri parolni kiritishda xato sharti.
                </li>
                <li className="navbar1__list1">
                  Funktsiyani ochish uchun maxsus imo -ishora.
                </li>
                <li className="navbar1__list1">
                  Mobil poyga o'yinidagi tebranishlar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
