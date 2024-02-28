import { Footer } from "../Footer";
import { Header } from "../Header";
import { AboutMe } from "../Section/AboutMe";
import { Contacts } from "../Section/Contacts";
import { Projects } from "../Section/Projects";

export const DefaultTemplate = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
};
