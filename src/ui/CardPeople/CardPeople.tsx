import { ICardPeople } from "../../interface/ICardPeople";
import styles from "./CardPeople.module.scss";

interface CardProps {
  data: ICardPeople;
}

export const CardPeople: React.FC<CardProps> = ({ data }) => {
  const progress = (data.moneyRaised / data.raiseMoney) * 100;
  return (
    <div className={styles.container_card_people}>
      <img
        className={styles.card_people_img}
        src={data.image}
        alt={data.title}
      />
      <div className={styles.container_card_people_body}>
        <h2 className={styles.card_people_title}>{data.title}</h2>
        <div className={styles.container_card_people_money}>
          <p className={styles.card_people_money_raised}>${data.moneyRaised}</p>
          <p className={styles.card_people_raise_money}>${data.raiseMoney}</p>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.container_card_people_button}>
          <button className={styles.card_people_button_help}>ПОМОЧЬ</button>
          <button className={styles.card_people_button_look}>ПОСМОТРЕТЬ</button>
        </div>
      </div>
    </div>
  );
};
