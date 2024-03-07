import { FaGithub } from "react-icons/fa";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import styles from "./style.module.scss";

export const ProjectCard = () => {
  return (
    <li className={styles.projectCard}>
      <h2 className="title two white">Quickstart</h2>
      <p className="paragraph">
        Linguagens: <span>Teste</span>
      </p>
      <p className="paragraph">
        Descrição do projeto contendo as informações sobre finalidade da
        aplicação e como está organizado o repositório...
      </p>
      <div className={styles.btnBox}>
        <button>
          <FaGithub size={20}/> Github Code
        </button>
        <button>
          <PiArrowBendUpRightFill size={20} /> Aplicação
        </button>
      </div>
    </li>
  );
};
