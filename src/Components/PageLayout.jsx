import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";
import Title from "./Title";

function PageLayout() {
  return (
    <div
    //  style={{ backgroundColor: "wheat" }}
    >
      <NavBar />
      <div className="MainPageConatiner">
        {/* <Title /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default PageLayout;
