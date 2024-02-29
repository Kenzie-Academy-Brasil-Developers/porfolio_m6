import { Footer } from "../Footer";
import { Header } from "../Header";
import { AboutMeSection } from "../Sections/AboutMeSection";
import { ContactSection } from "../Sections/ContactsSection";
import { ProjectsSection } from "../Sections/ProjectsSection";


export const DefaultTemplate = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};
