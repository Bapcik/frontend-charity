import logo from "../../assets/Logo.svg";
import textLogo from "../../assets/TextLogo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <div className={styles.container_header}>
      <div className={styles.header_img_container}>
        <a href="/" className={styles.header_link_logo}>
          <img src={logo} alt="logo" className={styles.header_img_logo} />
          <img
            src={textLogo}
            alt="logo"
            className={styles.header_img_logoText}
          />
        </a>
      </div>
      <div className={styles.header_link_container}>
        <ScrollLink
          className={styles.header_link}
          to="about"
          smooth={true}
          duration={500}
        >
          О нас
        </ScrollLink>
        <ScrollLink
          className={styles.header_link}
          to="help"
          smooth={true}
          duration={500}
        >
          Нуждающиеся в помощи
        </ScrollLink>
      </div>
      <div className={styles.header_button_container}>
        <ScrollLink
          className={styles.header_button_help}
          to="help"
          smooth={true}
          duration={500}
        >
          ПОМОЧЬ
        </ScrollLink>

        <Link className={styles.header_button_need_help} to="/form">
          НУЖНА ПОМОЩЬ
        </Link>
      </div>
    </div>
  );
};
