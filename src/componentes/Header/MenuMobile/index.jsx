import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { slide as Menu } from "react-burger-menu";
import styles from "./style.module.scss";

const CustomBurgerIcon = () => <TiThMenu size={18} />;
const CustomCrossIcon = () => (
  <IoMdClose className={styles.btnMenuClose} size={15} />
);

export const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.mobileMenu__container}>
      <button className={styles.btnMenu} onClick={handleMenuOpen}>
        <CustomBurgerIcon />
      </button>

      <Menu
        className={styles.bm_menu}
        isOpen={menuOpen}
        width={"150px"}
        right
        customBurgerIcon={false}
        customCrossIcon={<CustomCrossIcon />}
        onClose={handleMenuClose}
      >
        <div className={styles.bm_itemList}>
          <a className="menu-item" href="#home">
            Home
          </a>
          <a className="menu-item" href="#projects">
            Projects
          </a>
          <a className="menu-item" href="#contacts">
            Contacts
          </a>
          <a className="menu-item" href="#socialMidias">
            Midias Sociais
          </a>
        </div>
      </Menu>
    </div>
  );
};
