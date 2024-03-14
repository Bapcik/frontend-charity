import styles from "./MakeTheWorldBetter.module.scss";
import Better from "../../../assets/Make_The_World_Better.jpg";


export const MakeTheWorldBetter = () => {
  return (
    <div className={styles.container_make_the_world_better}>
      <img className={styles.make_the_world_better_img} src={Better} alt="Make_The_World_Better" />
      <div className={styles.container_make_the_world_better_body}>
        <p className={styles.make_the_world_better_text}>ДЕЛАЕМ МИР ДОБРЕЕ</p>
        <h3 className={styles.make_the_world_better_title}>Высшая форма любви</h3>
        <p className={styles.world_better_text}>
          Лучшая философия благотворительности - это <br/> та, которая наиболее
          эффективно помогает <br/> нуждающимся.
        </p>
      </div>
    </div>
  );
};
