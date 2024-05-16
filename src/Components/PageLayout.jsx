import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";

function PageLayout() {
  return (
    <div
    //  style={{ backgroundColor: "wheat" }}
    >
      <NavBar />
      <div className="MainPageConatiner">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default PageLayout;
