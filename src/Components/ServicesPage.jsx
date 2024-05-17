import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.css";
import "./ServicesPage.css";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Screenshot 2024-05-17 095359.png";
import img2 from "../assets/Screenshot 2024-05-17 095417.png";
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
          <h1 className="text-center text-light text-decoration-underline fw-bold ServicesHeader mb-5">
            Hizmetlerimiz
          </h1>
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
