import Social from "../../../assets/Social_Work_&_Charity.png";
import Oval from "../../../assets/Oval.png";
import styles from "./MissionStatement.module.scss";

export const MissionStatement = () => {
  return (
    <div className={styles.container_mission_statement}>
      <img
        className={styles.mission_statement_oval}
        src={Oval}
        alt="Oval_img"
      />
      <div className={styles.mission_statement_text_img}>
        <div className={styles.mission_statement_text_button}>
          <h1 className={styles.mission_statement_title}>
            Оказание помощи менее удачливым
          </h1>
          <p className={styles.mission_statement_text}>
            Цель работы нашего фонда – сокращение детской и младенческой
            смертности и инвалидности в Казахстане. Миссия – воспитание традиции
            и культуры благотворительности в нашей стране.
          </p>
          <button className={styles.mission_statement_button}>ПОЖЕРТВОВАТЬ</button>
        </div>
        <img
          className={styles.mission_statement_social}
          src={Social}
          alt="Social_img"
        />
      </div>
    </div>
  );
};
