import { ICardPeople } from "../../interface/ICardPeople";
import styles from "./CardPeople.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  data: ICardPeople;
}

export const CardPeople: FC<CardProps> = ({ data }) => {
  const progress = (data.sum / data.sumCollected) * 100;
  const navigate = useNavigate();
  return (
    <div className={styles.container_card_people}>
      <img
        className={styles.card_people_img}
        src={`http://localhost:3000/uploads/${data.image}`}
        alt={data.title}
      />
      <div className={styles.container_card_people_body}>
        <h2 className={styles.card_people_title}>{data.title}</h2>
        <div className={styles.container_card_people_money}>
          <p className={styles.card_people_money_raised}>
            {data.sum.toLocaleString()} ₸
          </p>
          <p className={styles.card_people_raise_money}>
            {data.sumCollected.toLocaleString()} ₸
          </p>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.container_card_people_button}>
          <button
            onClick={() => navigate(`pay/${data.id}`)}
            className={styles.card_people_button_help}
          >
            ПОМОЧЬ
          </button>
          <button className={styles.card_people_button_look}>ПОСМОТРЕТЬ</button>
        </div>
      </div>
    </div>
  );
};
