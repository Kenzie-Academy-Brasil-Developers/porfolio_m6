import { DefaultTemplate } from "../../componentes/DefaultTemplate";
import { AboutMe } from "../../componentes/Section/AboutMe";
import { Contacts } from "../../componentes/Section/Contacts";
import { Projects } from "../../componentes/Section/Projects";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate />
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  );
};
