import logo from "../../assets/Logo.svg";
import textLogo from "../../assets/TextLogo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container_header}>
      <div className={styles.header_img_container}>
        <a href="/" className={styles.header_link_logo}>
        <img src={logo} alt="logo" className={styles.header_img_logo} />
        <img src={textLogo} alt="logo" className={styles.header_img_logoText} />
        </a>
       
      </div>
      <div className={styles.header_link_container}>
        <a className={styles.header_link} href="#">
          О нас
        </a>
        <a className={styles.header_link} href="#">
          Нуждающиеся в помощи
        </a>
      </div>
      <div className={styles.header_button_container}>
        <a className={styles.header_button_help} href="#">
          ПОМОЧЬ
        </a>
        <a className={styles.header_button_need_help} href="/form">
          НУЖНА ПОМОЩЬ
        </a>
      </div>
    </div>
  );
};
