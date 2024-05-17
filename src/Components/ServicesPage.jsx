import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.css";
import "./ServicesPage.css";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Screenshot 2024-05-17 095359.png";
import img2 from "../assets/Screenshot 2024-05-17 095417.png";
import img from "../assets/img1-removebg-preview.png";
import icon from "../assets/icon2.png";
import { useEffect, useState } from "react";
function ServicesPage() {
  const ServiceInfo = [
    {
      serviceName: "Service Name",
      serviceImg1: img1,
      serviceImg2: img2,
      serviceIcon: <FontAwesomeIcon icon={faGears} className="h1" />,
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi laborum illo consequuntur pariatur officiis facilis quaedoloremque libero sunt sequi eos explicabo possimus voluptatum,odio quisquam obcaecati voluptatem dicta. Eligendi?",
    },
    {
      serviceName: "Service Name",
      serviceImg1: img1,
      serviceImg2: img2,
      serviceIcon: <FontAwesomeIcon icon={faGears} className="h1" />,
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi laborum illo consequuntur pariatur officiis facilis quaedoloremque libero sunt sequi eos explicabo possimus voluptatum,odio quisquam obcaecati voluptatem dicta. Eligendi?",
    },
    {
      serviceName: "Service Name",
      serviceImg1: img1,
      serviceImg2: img2,
      serviceIcon: <FontAwesomeIcon icon={faGears} className="h1" />,
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi laborum illo consequuntur pariatur officiis facilis quaedoloremque libero sunt sequi eos explicabo possimus voluptatum,odio quisquam obcaecati voluptatem dicta. Eligendi?",
    },
    {
      serviceName: "Service Name",
      serviceImg1: img1,
      serviceImg2: img2,
      serviceIcon: <FontAwesomeIcon icon={faGears} className="h1" />,
      serviceDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi laborum illo consequuntur pariatur officiis facilis quaedoloremque libero sunt sequi eos explicabo possimus voluptatum,odio quisquam obcaecati voluptatem dicta. Eligendi?",
    },
  ];

  const [Service, setService] = useState([]);

  useEffect(() => {
    const Services = ServiceInfo.map((service, index) => (
      <div className="serviceCardContainer">
        <div className="d-flex border-bottom border-2 border-dark mt-3 mb-3 gap-3">
          {service.serviceIcon}
          <h1 className="fw-bold">{service.serviceName}</h1>
        </div>
        <div>
          <p>{service.serviceDescription}</p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 pb-3">
            <div className="serviceImg">
              <img src={img1} />
            </div>
            <div className="serviceImg">
              <img src={img2} />
            </div>
            <div className="serviceImg">
              <img src={img2} />
            </div>
            <div className="serviceImg">
              <img src={img1} />
            </div>
          </div>
        </div>
      </div>
    ));

    setService(Services);
  }, []);
  return (
    <>
      <div>
        <div className="firstSectionContainer ServicesPageContainer"></div>
        <div>
          <h1 className="text-center text-decoration-underline fw-bold ServicesHeader mb-5 mt-5">
            Hizmetlerimiz
          </h1>
        </div>
        <div className="d-flex justify-content-around gap-3 mt-5 mb-5 pt-5">
          <div style={{ flex: "40%" }} className="imgContainer">
            <img src={img} />
          </div>
          <div
            style={{ flex: "60%" }}
            className="d-flex justify-content-center"
          >
            <div className="textSection ">
              <h2 className="aboutHeader">
                Mühendislik, Teknoloji ve Danışmanlık alanlarında yüksek
                standartlarda çözümler
              </h2>
              <p className="text-secondary">
                Tecrübeli teknik ekibimizle hayallerinizi tasarlıyoruz.
              </p>
              <div className="d-flex flex-column gap-5 mt-3">
                <div className="d-flex gap-5 mt-3">
                  <div className="d-flex successContanier">
                    <div>
                      <img src={icon} width={45} />
                    </div>
                    <div className="fw-bold">
                      <div>+10 Yıl</div>
                      <div>Pazar Deneyimi</div>
                    </div>
                  </div>
                  <div className="d-flex successContanier">
                    <div>
                      <img src={icon} width={45} />
                    </div>
                    <div className="fw-bold">
                      <div>+10 Yıl</div>
                      <div>Pazar Deneyimi</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-5">
                  <div className="d-flex successContanier">
                    <div>
                      <img src={icon} width={45} />
                    </div>
                    <div className="fw-bold">
                      <div>+10 Yıl</div>
                      <div>Pazar Deneyimi</div>
                    </div>
                  </div>
                  <div className="d-flex successContanier">
                    <div>
                      <img src={icon} width={45} />
                    </div>
                    <div className="fw-bold">
                      <div>+10 Yıl</div>
                      <div>Pazar Deneyimi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-4 pt-5">
          <div className="serviceCardContainer">
            <div className="d-flex border-bottom border-2 border-dark mt-3 mb-3 gap-3">
              <FontAwesomeIcon icon={faGears} className="h1" />
              <h1 className="fw-bold">Service Name</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi laborum illo consequuntur pariatur officiis facilis quae
                doloremque libero sunt sequi eos explicabo possimus voluptatum,
                odio quisquam obcaecati voluptatem dicta. Eligendi?
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 pb-3">
                <div className="serviceImg">
                  <img src={img1} />
                </div>
                <div className="serviceImg">
                  <img src={img2} />
                </div>
                <div className="serviceImg">
                  <img src={img2} />
                </div>
                <div className="serviceImg">
                  <img src={img1} />
                </div>
              </div>
            </div>
          </div>
          {Service}
        </div>
      </div>
    </>
  );
}
export default ServicesPage;
