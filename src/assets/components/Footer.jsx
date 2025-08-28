import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-neutral-content p-4 mt-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Allan
          Sechrist
        </p>
        <p>Game Data from <a href="https://www.freetogame.com/" target="_blank" className="link link-hover">Free To Game</a></p>
        <div className="flex space-x-4 justify-between">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="https://github.com/AllanSechrist" target="_blank">
            <FaGithub />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
