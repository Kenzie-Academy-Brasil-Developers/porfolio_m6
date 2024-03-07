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
              <FaFacebookF size={15} />
            </div>
            <div className={`${styles.singleSocialMidia} ${styles.instagram}`}>
              <FaInstagram size={15} />
            </div>
            <div className={`${styles.singleSocialMidia} ${styles.linkedin}`}>
              <FaLinkedinIn size={15} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
