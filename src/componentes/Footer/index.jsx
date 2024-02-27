import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <img src="*" alt="UserLogo" />
      <div>
        <p>Thank you!</p>
        <p>Follow me on my social networks and let's talk</p>
      </div>

      <div>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};
