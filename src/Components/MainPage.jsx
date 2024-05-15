import Title from "./Title";
import backgroundImg from "../assets/mainpage background 1.jpg";
import Services from "./Services";
import Refrences from "./refrences";
import Contact from "./Contact";
import Footer from "./footer";

function MainPage() {
  return (
    <>
      <div
        style={{
          // background: "rgb(43,141,118)",
          background:
            " linear-gradient(142deg, rgba(43,141,118,1) 45%, rgba(21,82,65,1) 79%)",
        }}
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
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default MainPage;
