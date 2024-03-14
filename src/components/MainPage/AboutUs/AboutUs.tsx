import { mockData } from "../../../mocks/MockAboutUs";
import { AboutUsCard } from "../../../ui/AboutUsCard/AboutUsCard";
import styles from "./AboutUs.module.scss";



export const AboutUs = () => {
  return (
    <div className={styles.container_about_us}>
      <h2 className={styles.about_us_title}>О нас</h2>
      <p className={styles.about_us_text}>
        Наш сайт – это мост между добрыми людьми и теми, кто нуждается в их
        помощи. Будьте щедры, делайте добро!
      </p>
      <div className={styles.about_us_card}>
        {mockData.map((item, id) => (
          <AboutUsCard key={id} data={item} />
        ))}
      </div>
    </div>
  );
};
