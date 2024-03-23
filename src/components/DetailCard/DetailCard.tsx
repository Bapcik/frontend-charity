import { FC } from "react";
import { ICardPeople } from "../../interface/ICardPeople";
import styles from "./DetailCard.module.scss";
import { Flex, Progress } from "antd";

interface CardProps {
  data: ICardPeople | undefined;
}

export const DetailCard: FC<CardProps> = ({ data }) => {
  const progress = (data!.sumCollected / data!.sum) * 100;
  return (
    <div className={styles.detail_card_container}>
      {data ? (
        <>
          <div >
            <div className={styles.detail_card_container_body}>
              <div>
                <img
                  className={styles.detail_card_image}
                  src={`http://localhost:3000/uploads/${data.image}`}
                  alt={data.title}
                />
              </div>
              <div className={styles.detail_card_container_progress}>
                <Flex gap="small" wrap="wrap">
                  <Progress
                    type="circle"
                    percent={progress}
                    strokeColor={"#168e02"}
                    format={() => (
                      <div className={styles.circle_text_container}>
                        <p className={styles.circle_text}>ВСЕГО СОБРАНО</p>
                        <p className={styles.circle_text_green}>
                          {data.sumCollected.toLocaleString()} ₸
                        </p>
                        <p className={styles.circle_text}>
                          ИЗ {data.sum.toLocaleString()} ₸
                        </p>
                      </div>
                    )}
                    size={200}
                  />
                </Flex>
                <button className={styles.detail_card_button}>ПОЖЕРТВОВАТЬ</button>
              </div>
            </div>
            <div className={styles.detail_card_container_text} >
            <h3 className={styles.detail_card_text_title}>{data.title}</h3>
            <p className={styles.detail_card_text_description}>{data.appealDescription}</p>
            </div>
          
          </div>
        </>
      ) : (
        <div>No user found for the given ID.</div>
      )}
    </div>
  );
};
