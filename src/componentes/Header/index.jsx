import styles from "./style.module.scss";
import { MenuMobile } from "./MenuMobile";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <span className="title three">Leandro</span>

          {isMobile ? (
            <nav>
              <ul className={styles.menuList}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contacts">Contatos</a>
                </li>
                <li>
                  <a href="#socialMidias">Mídias Digitais</a>
                </li>
              </ul>
            </nav>
          ) : (
            <MenuMobile />
          )}
        </div>
      </div>
    </header>
  );
};
