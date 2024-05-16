import NavLogo from "../assets/_effaf_2_-_Copy-removebg-preview.png";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid navContainer">
          <a className="navbar-brand" href="#">
            <img src={NavLogo} width={135} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                AnaSayfa
              </a>
              <a className="nav-link" href="/#">
                Hakkımızda
              </a>
              <a className="nav-link" href="/#services">
                Sektörler
              </a>
              <a className="nav-link" href="/#contact">
                iletişim
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
