import { Footer } from "../Footer";
import { Header } from "../Header";
import { AboutMeSection } from "../Sections/AboutMeSection";
import { ContactsSection } from "../Sections/ContactsSection";
import { ProjectsSection } from "../Sections/ProjectsSection";
import styles from "./style.module.scss";


export const DefaultTemplate = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <AboutMeSection />
      <ProjectsSection />
      <ContactsSection />
      <Footer />
    </main>
  );
};
