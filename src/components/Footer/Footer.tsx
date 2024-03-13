import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import styles from "./Frooter.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h3 className={styles.footer_text}>© 2024 Komek. Все права защищены.</h3>
      <div className={styles.footer_container_icon}>
        <a className={styles.footer_icon} href="#">
          <img
            src={facebook}
            alt="facebook"
            className={styles.footer_icon_facebook}
          />
        </a>
        <a className={styles.footer_icon} href="#">
          <img
            src={instagram}
            alt="instagram"
            className={styles.footer_icon_instagram}
          />
        </a>
        <a className={styles.footer_icon} href="#">
          <img
            src={twitter}
            alt="twitter"
            className={styles.footer_img_twitter}
          />
        </a>
      </div>
    </div>
  );
};
