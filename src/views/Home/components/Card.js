import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

function getAge() {
  const today = new Date();
  const birthDate = new Date("1996/02/09");
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function Card() {
  return (
    <div className="card border-bottom p-5 flex flex-row flex-wrap">
      <div className="basis-full sm:basis-1/3 flex flex-col justify-center items-center mb-5 sm:mb-0">
        <div className="img-container">
          <img src="./HomeImages/selfie-1.webp" alt="" />
        </div>
      </div>

      <div className="basis-full sm:basis-2/3 flex flex-col justify-center items-start sm:pl-10 text-lg">
        <h1 className="text-4xl sm:text-6xl font-bold">Reli Salazar</h1>

        <h2 className="home-subtitle text-2xl sm:text-4xl font-bold mb-3">
          Web developer
        </h2>

        <div className="flex gap-2 items-center">
          <p className="font-bold text-xl">Age:</p>
          <p>{getAge()} yo</p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="font-bold text-xl">Nationality:</p>
          <p>Mexican</p>
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <p className="font-bold text-xl">Technologies:</p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fab", "react"]} />{" "}
            React
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fab", "vuejs"]} />{" "}
            VueJS
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fab", "python"]} />{" "}
            Python
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fab", "laravel"]} />{" "}
            Laravel
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fa", "database"]} />{" "}
            MongoDB
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fa", "database"]} />{" "}
            MySQL
          </p>
          <p>
            <FontAwesomeIcon className="tech-icon" icon={["fa", "paintbrush"]} />{" "}
            ClipStudio Paint
          </p>
        </div>

        <div className="flex my-2">
          <a href="/cv.pdf"
            target="_blank"
            rel="noopener noreferer"
            className="text-base primary-button py-1 px-2"
          >
            My curriculum
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
