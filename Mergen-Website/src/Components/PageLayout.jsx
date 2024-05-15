import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function PageLayout() {
  return (
    <div>
      <NavBar />
      <div className="MainPageConatiner">
        <Outlet />
      </div>
    </div>
  );
}
export default PageLayout;
