import { ProjectCard } from "./ProjectCard";
import { Projects } from "../../../Services/projects.js";
import styles from "./style.module.scss";

export const ProjectsSection = () => {
  return (
    <section className={styles.sectionBackground}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2 className="title three white">My Projects</h2>
          <p className="paragraph sm grey">
            Projects created at <span>Kenzie Academy</span>
          </p>
        </div>
        <ul>
          {Projects.map((project) => (
            <ProjectCard key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
