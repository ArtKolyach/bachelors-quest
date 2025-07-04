import { QuestPage } from "../QuestPage.tsx";
import origami from "../../../assets/origami.png";

export const PaperPlane = () => {
  return (
    <QuestPage
      image={origami}
      title={"Знания из колледжа всё-таки пригодятся?.."}
      answer={"Лети"}
      to={"/deeper"}
      backgroundColor={"#ffba5f"}
    />
  );
};
