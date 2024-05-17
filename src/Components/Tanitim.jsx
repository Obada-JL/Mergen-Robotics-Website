import img from "../assets/img1-removebg-preview.png";
import icon from "../assets/icon2.png";
import "./MainPage.css";
import "./tanitim.css";
function Tanitim() {
  return (
    <>
      <div>
        <div className="firstSectionContainer AboutPageContainer"></div>
        <div className="d-flex justify-content-around gap-3 mt-5 mb-5">
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
        <div
          className="d-flex justify-content-center gap-5 p-5"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <div className="aboutUs">
            <h5 className="aboutHeader">Misyon ve Vizyon</h5>
            <p className="aboutParagraph">
              Dünya standartlarında rekabet eden; tasarım, Ar-Ge ve inovasyon
              kabiliyetlerine sahip; genç, dinamik ve tecrübeli ekibimiz ile
              dışa bağımlılığı azaltacak, kullanıcı dostu, fark yaratan,
              hizmetler üretmek ve teknolojiler geliştirmektir.
            </p>
          </div>
          <div className="aboutUs">
            <h5 className="aboutHeader">Misyon ve Vizyon</h5>
            <p className="aboutParagraph">
              Dünya standartlarında rekabet eden; tasarım, Ar-Ge ve inovasyon
              kabiliyetlerine sahip; genç, dinamik ve tecrübeli ekibimiz ile
              dışa bağımlılığı azaltacak, kullanıcı dostu, fark yaratan,
              hizmetler üretmek ve teknolojiler geliştirmektir.
            </p>
          </div>
          <div className="aboutUs">
            <h5 className="aboutHeader">Misyon ve Vizyon</h5>
            <p className="aboutParagraph">
              Dünya standartlarında rekabet eden; tasarım, Ar-Ge ve inovasyon
              kabiliyetlerine sahip; genç, dinamik ve tecrübeli ekibimiz ile
              dışa bağımlılığı azaltacak, kullanıcı dostu, fark yaratan,
              hizmetler üretmek ve teknolojiler geliştirmektir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tanitim;
