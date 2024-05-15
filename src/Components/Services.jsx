import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
function Services() {
  const openCard = (e) => {
    const detailsCard = document.getElementsByClassName("detailCard");
    const card = detailsCard[e];
    card.style.animationDuration = "0.5s";
    card.style.animationTimingFunction = "ease-in-out";
    card.style.animationIterationCount = "1";
    card.style.animationFillMode = "both";

    if (card.style.opacity === "0" || card.style.opacity === "") {
      card.style.animationName = "openCard";
      card.style.marginTop = "-25px";
      card.style.opacity = "1";
    } else {
      card.style.animationName = "closeCard";
      card.style.marginTop = "-120px";
      card.style.opacity = "0";
    }
  };
  return (
    <div className="mt-5 pt-3">
      <div className="servicesContainer">
        <div className="Headings">
          <h1 className="text-decoration-underline fw-bold">Sektörlerimiz</h1>
          <p className="w-75 pt-3 titleDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            necessitatibus. Odio itaque adipisci facilis possimus inventore
            consequatur, et reiciendis, ipsam architecto,
          </p>
        </div>
        <div className="services mt-5 mb-5 pb-3">
          <div className="d-flex flex-wrap gap-3 cardsContainer mb-5">
            <div className="serviceCard">
              <div
                onClick={() => {
                  openCard(0);
                }}
                className="mainCardText d-flex justify-content-between align-items-center"
              >
                <div>
                  <h3>Service 1</h3>
                  <a
                    href="#"
                    className="text-primary text-decoration-underline cardLinks"
                  >
                    See More
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="2xl"
                  style={{ fontSize: "45px" }}
                />
              </div>
              <div className="detailCard">
                <p>
                  Description Lorem ipsum dolor sit amet Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline cardLinks"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div
                onClick={() => {
                  openCard(1);
                }}
                className="mainCardText d-flex justify-content-between align-items-center"
              >
                <div>
                  <h3>Service 1</h3>
                  <a
                    href="#"
                    className="text-primary text-decoration-underline cardLinks"
                  >
                    See More
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="2xl"
                  style={{ fontSize: "45px" }}
                />
              </div>
              <div className="detailCard">
                <p>
                  Description Lorem ipsum dolor sit amet Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline cardLinks"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div
                onClick={() => {
                  openCard(2);
                }}
                className="mainCardText d-flex justify-content-between align-items-center"
              >
                <div>
                  <h3>Service 1</h3>
                  <a
                    href="#"
                    className="text-primary text-decoration-underline cardLinks"
                  >
                    See More
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="2xl"
                  style={{ fontSize: "45px" }}
                />
              </div>
              <div className="detailCard">
                <p>
                  Description Lorem ipsum dolor sit amet Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline cardLinks"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div
                onClick={() => {
                  openCard(3);
                }}
                className="mainCardText d-flex justify-content-between align-items-center"
              >
                <div>
                  <h3>Service 1</h3>
                  <a
                    href="#"
                    className="text-primary text-decoration-underline cardLinks"
                  >
                    See More
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="2xl"
                  style={{ fontSize: "45px" }}
                />
              </div>
              <div className="detailCard">
                <p>
                  Description Lorem ipsum dolor sit amet Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline cardLinks"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div
                onClick={() => {
                  openCard(4);
                }}
                className="mainCardText d-flex justify-content-between align-items-center"
              >
                <div>
                  <h3>Service 1</h3>
                  <a
                    href="#"
                    className="text-primary text-decoration-underline cardLinks"
                  >
                    See More
                  </a>
                </div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="2xl"
                  style={{ fontSize: "45px" }}
                />
              </div>
              <div className="detailCard">
                <p>
                  Description Lorem ipsum dolor sit amet Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline cardLinks"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
