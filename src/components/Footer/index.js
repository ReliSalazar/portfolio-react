import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-5 sm:px-0 py-10">
        <h2 className="text-2xl font-bold mb-5 sm:px-2">Contact</h2>
        <ul className="flex flex-col md:flex-row">
          <li className="sm:px-2 py-3">
            <a
              className="primary-button py-1 px-2"
              href="mailto:info@relisalazar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fa", "envelope"]} />
              Email
            </a>
          </li>

          <li className="sm:px-2 py-3">
            <a
              className="primary-button py-1 px-2"
              href="https://github.com/ReliSalazar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fab", "github"]} />
              Github
            </a>
          </li>

          <li className="sm:px-2 py-3">
            <a
              className="primary-button py-1 px-2"
              href="https://twitter.com/reli_salazar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} />
              Personal Twitter
            </a>
          </li>

          <li className="sm:px-2 py-3">
            <a
              className="primary-button py-1 px-2"
              href="https://twitter.com/varedi_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} />
              Art Twitter
            </a>
          </li>

          <li className="sm:px-2 py-3">
            <a
              className="primary-button py-1 px-2"
              href="https://www.youtube.com/channel/UC8t-pZwHzsWNuFxv8lZGc7Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fab", "youtube"]} />
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
