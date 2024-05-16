import Teknopark from "../assets/TEKNOPARK-GAZIANTEP-removebg-preview.png";
import Tubitak from "../assets/tubitak-removebg-preview.png";
import Target from "../assets/target-removebg-preview.png";
import Fablab from "../assets/fablab_gaziantep-removebg-preview.png";
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
              <img src={Teknopark} height={100} className="refrence" />
              <img src={Tubitak} height={100} className="refrence" />
              <img src={Target} height={100} className="refrence" />
              <img src={Fablab} height={100} className="refrence" />
            </div>
            <div class="scroll-element secondary">
              <img src={Teknopark} height={100} className="refrence" />
              <img src={Tubitak} height={100} className="refrence" />
              <img src={Target} height={100} className="refrence" />
              <img src={Fablab} height={100} className="refrence" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Refrences;
