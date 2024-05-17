import { Link } from "react-router-dom";
import "./Error Page 404.css";
function ErrorPage() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "75vh" }}
      >
        <h1 className="text404">404</h1>
        <p className="errorTitle">
          Aradığınız Sayfaya Ulaşılamadı <br /> Ana sayfaya
          <span className="text-decoration-underline">
            <Link style={{ color: "rgb(12,132,121)" }} to={"/"}>
              Buradan
            </Link>
          </span>
          Ulaşabilirsiniz
        </p>
      </div>
    </>
  );
}
export default ErrorPage;
