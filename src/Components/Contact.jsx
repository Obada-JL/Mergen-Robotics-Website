import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div>
      <div>
        <div>
          <div className="contactHeadings t-5 mb-5 text-light">
            <h2 className="fw-bold">Contact Us</h2>
            <p>
              Description for Contact Us Section (if you want) as moderator for
              page
            </p>
          </div>
          <div>
            <form className="d-flex flex-column gap-3 align-items-center">
              <div className="d-flex gap-5">
                <label htmlFor="Name">
                  <input
                    type="text"
                    placeholder="Name"
                    id="Name"
                    className="ContactInput"
                  />
                </label>
                <label htmlFor="Email">
                  <input
                    type="text"
                    placeholder="Email"
                    id="Email"
                    className="ContactInput"
                  />
                </label>
              </div>

              <label htmlFor="YourMessage">
                <textarea
                  type="text"
                  placeholder="Your Message"
                  id="YourMessage"
                  className="ContactInput"
                />
              </label>
              <button className="contactButton">Submit</button>
            </form>
          </div>
        </div>
        <div className="mt-5 pt-5 d-flex justify-content-center">
          <div className="contactInfoContainer mt-5  d-flex justify-content-around">
            <div className="contactCard">
              <div className="contactCardIcon">
                <FontAwesomeIcon icon={faEnvelope} className="h1" />
              </div>
              <div className="ContactTextContainer">
                <h5 className="h3 fw-bold">E-mail</h5>
                <div className="namesContainer">
                  <p>email1</p>
                  <p>email2</p>
                  <p>email3</p>
                </div>
              </div>
            </div>
            <div className="contactCard">
              <div className="contactCardIcon">
                <FontAwesomeIcon icon={faPhone} className="h1" />
              </div>
              <div className="ContactTextContainer">
                <h5 className="h3 fw-bold">Telefon </h5>
                <div className="namesContainer">
                  <p>email1</p>
                  <p>email2</p>
                  <p>email3</p>
                </div>
              </div>
            </div>
            <div className="contactCard">
              <div className="contactCardIcon">
                <FontAwesomeIcon icon={faLocationDot} className="h1" />
              </div>
              <div className="ContactTextContainer">
                <h5 className="h3 fw-bold">Adres</h5>
                <div className="namesContainer adress">
                  <p>
                    ÇAMTEPE Mah. MAHMUT TEVFİK ATAY BULVAR [ 4 A / 1 ] ŞAHİNBEY
                    / GAZİANTEP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
