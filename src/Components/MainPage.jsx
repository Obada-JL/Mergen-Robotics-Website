import Title from "./Title";
import backgroundImg from "../assets/mainpage background 1.jpg";
import Services from "./Services";
import Refrences from "./refrences";
import Contact from "./Contact";
import Footer from "./footer";
import bg1 from "../assets/background1.jpg";
import "./MainPage.css";
function MainPage() {
  return (
    <>
      <div
        className="firstSectionContainer"
        style={
          {
            // background: "rgb(43,141,118)",
            // background: rgb(43,141,118);
            // background:
            //   "linear-gradient(148deg, rgba(43,141,118,1) 34%, rgba(27,92,77,1) 63%, rgba(13,58,56,1) 83%)",
          }
        }
      >
        {/* <div>
        <img src={backgroundImg} className="backgroundImg" />
      </div> */}
        <Title />
      </div>
      <div id="services">
        <Services />
      </div>
      <div
        id="refrences"
        style={
          {
            // background: "black",
            // background:
            //   " linear-gradient(142deg, rgba(43,141,118,1) 45%, rgba(21,82,65,1) 79%)",
          }
        }
      >
        <Refrences />
      </div>
      <div
        id="contact"
        className="pt-5 pb-5"
        style={{
          backgroundColor: "#05979d",
          // background: "rgb(43,141,118)",
          // background:
          //   " linear-gradient(142deg, rgba(43,141,118,1) 45%, rgba(21,82,65,1) 79%)",
        }}
      >
        <Contact />
      </div>
    </>
  );
}
export default MainPage;
