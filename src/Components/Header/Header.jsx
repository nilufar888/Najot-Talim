import "./Header.scss";
import { useNavigate } from "react-router-dom";

//images
import Logo from "../../Assets/Images/Logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-wrapp">
        <img onClick={() => navigate("/")} src={Logo} alt="" />

        <div className="header_right">
          <ul className="header-list">
            <li className="header-item">
              <a
                onClick={() => navigate("/AboutUs")}
                href="#"
                className="header-link"
              >
                Biz haqimizda
              </a>
            </li>
            <li className="header-item">
              <a
                onClick={() => navigate("/Blog")}
                href="#"
                className="header-link"
              >
                Blog
              </a>
            </li>
          </ul>

          <button className="header-btn">Kirish</button>
        </div>
      </div>
    </div>
  );
}
