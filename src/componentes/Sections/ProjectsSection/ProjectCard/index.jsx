import { FaGithub } from "react-icons/fa";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import styles from "./style.module.scss";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectCard}>
      <h2 className="title two white">{project.name}</h2>
      <p className="paragraph">
        Linguagens: <span>{project.language}</span>
      </p>
      <p className="paragraph">
        Descrição do projeto contendo as informações sobre finalidade da
        aplicação e como está organizado o repositório...
      </p>
      <div className={styles.btnBox}>
        <a href={project.codeLink} target="_blank">
          <FaGithub size={20}/> GithubCode
        </a>
        <a href={project.vercelLink} target="_blank">
          <PiArrowBendUpRightFill size={20} /> Aplicação
        </a>
      </div>
    </li>
  );
};
