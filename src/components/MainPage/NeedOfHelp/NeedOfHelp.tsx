import { useState } from "react";
import { mockData } from "../../../mocks/MockPeople";
import { CardPeople } from "../../../ui/CardPeople/CardPeople";
import styles from "./NeedOfHelp.module.scss";
import { useGetAllCharity } from "../../../services/useGetAllCharity.ts";

export const NeedOfHelp = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = mockData.length;
  const { data = [] } = useGetAllCharity();
  console.log(data);
  const handleShowMore = () => {
    setVisibleCards(visibleCards + 50);
  };

  return (
    <div className={styles.container_need_of_help}>
      <p className={styles.need_of_help_text}>НУЖДАЮЩИЕСЯ В ПОМОЩИ</p>
      <h3 className={styles.need_of_help_title}>Высокотехнологичная помощь</h3>

      <div className={styles.container_need_of_help_card}>
        {data.slice(0, visibleCards).map((item, index) => (
          <CardPeople key={index} data={item} />
        ))}
      </div>

      {visibleCards < totalCards && (
        <p className={styles.show_more_button} onClick={handleShowMore}>
          ПОСМОТРЕТЬ ЕЩЕ
        </p>
      )}
    </div>
  );
};
