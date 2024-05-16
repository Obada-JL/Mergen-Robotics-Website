import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/_effaf_1-removebg-preview.png";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="border-top border-2 border-dark">
      <div className="d-flex justify-content-between align-items-center w-100 ps-5 pe-5  pt-3 pb-3">
        <div>
          <img src={Logo} width={150} />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <ul className="SocialMediaLogos">
            <li>
              <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="socialMediaIcon"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="socialMediaIcon"
              />
            </li>
          </ul>
          <div className="d-flex justify-content-center h4 fw-bold">
            mergenrobotics
          </div>
        </div>
        <div>
          <h4 className="text-center text-decoration-underline fw-bold h5">
            Links
          </h4>
          <ul className="h5">
            <li>Hakkımızda</li>
            <li>Sektörler</li>
            <li>İletişim</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
