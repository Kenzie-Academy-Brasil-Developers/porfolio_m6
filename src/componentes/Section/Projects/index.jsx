import { FaGithub } from "react-icons/fa";
import { PiArrowBendUpRightFill } from "react-icons/pi";

export const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <p>
        Projects created at <span>Kenzie Academy</span>
      </p>
      <div>
        <h2>Quickstart</h2>
        <p>
          Linguagens: <span>Teste</span>
        </p>
        <p>
          Descrição do projeto contendo as informações sobre finalidade da
          aplicação e como está organizado o repositório...
        </p>
        <div>
          <div>
            <button>
              <FaGithub /> Github Code
            </button>
            <button>
              <PiArrowBendUpRightFill /> Aplicação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
