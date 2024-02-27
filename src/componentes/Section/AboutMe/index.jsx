import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <section>
      <div>
        <img src="*" alt="UserLogo" />
        <p>Hello, my name is User</p>
        <div>
          <h1>
            I
            <em>
              <strong>love</strong>
            </em>
            creating and
            <em>
              <strong>developing</strong>
            </em>
            projects
          </h1>
          <p>
            Discover here in this environment, created especially for you, all
            my projects and technologies
          </p>
          <div>
            <button type="button">See Projects</button>
            <button type="button">
              <FaGithub />
            </button>
          </div>
        </div>

        <div>
          <FaHtml5 />
          <FaCss3Alt />
          <RiJavascriptFill />
          <DiNodejs />
          <FaReact />
        </div>
      </div>
      <aside>
        <img src="*" alt="banner" />
      </aside>
    </section>
  );
};
