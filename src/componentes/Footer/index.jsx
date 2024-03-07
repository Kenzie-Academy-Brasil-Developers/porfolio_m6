import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import userLogo from "../../assets/user.jpeg";
import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer id="socialMidias">
      <div className="container">
        <div className={styles.flexBox}>
          <div className={styles.boxThanks}>
            <img src={userLogo} alt="UserLogo" />
            <div className={styles.thanksText}>
              <p className="title three white">Thank you!</p>
              <p className="paragraph sm grey">
                Follow me on my social networks and let's talk
              </p>
            </div>
          </div>

          <div className={styles.boxSocialMidias}>
            <div className={`${styles.singleSocialMidia} ${styles.facebook}`}>
              <a href="https://www.facebook.com/leandro.goncalves.73550" target="_blank"><FaFacebookF size={15} /></a>
            </div>
            <div className={`${styles.singleSocialMidia} ${styles.instagram}`}>
              <a href="https://www.instagram.com/el.lgoncalves/" target="_blank"><FaInstagram size={15} /></a>
            </div>
            <div className={`${styles.singleSocialMidia} ${styles.linkedin}`}>
              <a href="https://www.linkedin.com/in/leandro-gon%C3%A7alves-3b1035239/" target="_blank"><FaLinkedinIn size={15} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
