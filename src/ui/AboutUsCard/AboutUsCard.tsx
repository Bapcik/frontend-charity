import { CardData } from "../../interface/ICard";
import styles from "./AboutUsCard.module.scss";

interface CardProps {
  data: CardData;
}

export const AboutUsCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={styles.container_about_us_card}>
      <div className={styles.about_us_card_title_img}>
        <img className={styles.about_us_card_img} src={data.imageUrl} alt={data.title} />
        <h3 className={styles.about_us_card_title}>{data.title}</h3>
      </div>
      <div className={styles.about_us_card_body}>
        <p className={styles.about_us_card_body_text}>{data.description}</p>
      </div>
    </div>
  );
};
