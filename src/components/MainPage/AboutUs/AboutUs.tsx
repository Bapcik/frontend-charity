import { CardData } from "../../../interface/ICard";
import { AboutUsCard } from "../../../ui/AboutUsCard/AboutUsCard";
import styles from "./AboutUs.module.scss";
import love from "../../../assets/love.png";
import flower from "../../../assets/flower.png";
import hand from "../../../assets/hand.png";
import solidarity from "../../../assets/solidarity.png";

const mockData: CardData[] = [
  {
    title: "Прямая помощь",
    description: "Благотворительные организации дают людям возможность изменить жизнь к лучшему, пусть даже в малой степени.",
    imageUrl: hand,
  },
  {
    title: "Страсть в помощи",
    description: "Люди, увлеченные каким-либо делом, способны принести наибольшую пользу.",
    imageUrl: solidarity,
  },
  {
    title: "Влияние",
    description: "Ваш голос и ваши действия имеют значение, и вы можете изменить мир к лучшему.",
    imageUrl: love,
  },
  {
    title: "Уменьшение бедности",
    description: "Когда люди собираются вместе, чтобы работать ради общего дела, они могут добиться великих свершений.",
    imageUrl: flower,
  },
];

export const AboutUs = () => {
  return (
    <div className={styles.container_about_us}>
      <h2 className={styles.about_us_title}>О нас</h2>
      <p className={styles.about_us_text}>
        Наш сайт – это мост между добрыми людьми и теми, кто нуждается в их
        помощи. Будьте щедры, делайте добро!
      </p>
      <div className={styles.about_us_card}>
        {mockData.map((item, index) => (
          <AboutUsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
