import Teknopark from "../assets/TEKNOPARK-GAZIANTEP-removebg-preview.png";
import İskur from "../assets/işkur-removebg-preview.png";
import sahinbey from "../assets/şahinbey_belediyesi-removebg-preview.png";
import sehitkamil from "../assets/şehitkamil belediyesi.svg";
import kosgeb from "../assets/kosgeb-removebg-preview.png";
import { Link } from "react-router-dom";
import "./refrences.css";
function Refrences() {
  return (
    <>
      <div>
        {/* <h1 className="text-decoration-underline fw-bold text-light">
          Referanslarımız
        </h1> */}
        <div className="d-flex justify-content-around mt-3 refrencesContainer">
          <div class="scroll-parent">
            <div class="scroll-element primary pe-3">
              <img src={sahinbey} height={100} className="refrence" />
              <img src={sehitkamil} height={100} className="refrence" />
              <img src={kosgeb} height={100} className="refrence" />
              <img src={Teknopark} height={100} className="refrence" />
              <img src={İskur} height={100} className="refrence" />
            </div>
            <div class="scroll-element secondary">
              <img src={sahinbey} height={100} className="refrence" />
              <img src={sehitkamil} height={100} className="refrence" />
              <img src={kosgeb} height={100} className="refrence" />
              <img src={Teknopark} height={100} className="refrence" />
              <img src={İskur} height={100} className="refrence" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Refrences;
