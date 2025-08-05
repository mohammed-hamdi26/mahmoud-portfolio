import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function SocialMedias() {
  return (
    <ul className="flex gap-10 text-2xl ">
      <li className="hover:text-[#0e76a8] transition-all duration-300">
        <a
          href="#"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="hover:text-[#25D366] transition-all duration-300">
        <a href="#" target="_blank">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedias;
