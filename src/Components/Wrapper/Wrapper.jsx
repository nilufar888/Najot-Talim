import "./Wrapper.scss";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="wrapper-pend">
        <div className="wrapper-img">
          <p className="wrapper-text">+20 dan ortiq </p>
          <h3 className="wrapper-head">Sertifikatlar</h3>
          <span className="wrapper-span">
            Barcha yo’nalishlarda kursni tugatganlik haqida tasdiqlovchi
            sertifikatlar topshiriladi.
          </span>
          <br />
          <a href="#" className="wrapper__left--link">
            Kurslarni boshlash →
          </a>
        </div>
      </div>
      <div className="wrapper-wrapp"></div>
    </div>
  );
}
