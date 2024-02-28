import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <span className="title three">UserLogo</span>

          <nav>
            <a href="*">Home</a>
            <a href="*">Projects</a>
            <a href="*">Contatos</a>
            <a href="*">Mídias Digitais</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
