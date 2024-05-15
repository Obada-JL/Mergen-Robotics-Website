import "./Title.css";

function Title() {
  return (
    <div className="pb-5 Container">
      <div className="container pb-3">
        <h1 className="text-decoration-underline text-light fw-bold">
          Hakkımızda
        </h1>
        <h2 className="titleHeader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit
          sapiente
        </h2>
        <p className="titleParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          libero cum aut similique reprehenderit omnis,
        </p>
        <button className="titleButton">
          Devamını oku <span className="h5 fw-bold">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
export default Title;