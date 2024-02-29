import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import userLogo from "../../../assets/user.jpeg";
import banner from "../../../assets/banner.jpg";
import styles from "./style.module.scss";

export const AboutMeSection = () => {
  return (
    <section className={styles.backgroundSection}>
      <div className="container">
        <div className={styles.flexBox}>
          <div>
            <div className={styles.boxProfile}>
              <img src={userLogo} alt="UserLogo" />
              <p className="paragraph">Hello, my name is User</p>
            </div>
            <div className={styles.seeMyProjectsBox}>
              <h1 className="title">
                I<em><strong> love </strong></em> creating and <em><strong> developing </strong></em>projects
              </h1>
              <p className="paragraph grey">
                Discover here in this environment, created especially for you,
                all my projects and technologies
              </p>
              <div className={styles.buttonBox}>
                <button className="btn solid title five" type="button">See Projects</button>
                <button className="btn_git solid" type="button">
                  <FaGithub />
                </button>
              </div>
            </div>

            <div className={styles.techlogies}>
              <FaHtml5 className={styles.tech}  />
              <FaCss3Alt className={styles.tech}  />
              <RiJavascriptFill className={styles.tech}  />
              <DiNodejs className={`${styles.tech} ${styles.node}`} />
              <FaReact className={styles.tech}  />
            </div>
          </div>
          <aside>
            <img src={banner} alt="banner" />
          </aside>
        </div>
      </div>
    </section>
  );
};
