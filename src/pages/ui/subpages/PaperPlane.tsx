import { QuestPage } from "../QuestPage.tsx";
import origami from "../../../assets/origami.png";
import styles from "../QuestPage.module.css";

export const PaperPlane = () => {
  return (
    <QuestPage
      image={origami}
      title={"Знания из колледжа всё-таки пригодятся?.."}
      answer={"Любовь"}
      to={"/deeper"}
      classname={styles.gridGradient}
    />
  );
};
