import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function SocialMedias() {
  return (
    <ul className="flex gap-10 text-2xl ">
      <li className="hover:text-text transition-all duration-300">
        <a
          href="https://www.linkedin.com/in/mahmoud-ahmed-891337270/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="hover:text-text transition-all duration-300">
        <a href="https://wa.me/201068365035" target="_blank">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedias;
