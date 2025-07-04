import { QuestPage } from "../QuestPage.tsx";
import tidehunter from "../../../assets/tidehunter.png";

export const PoolPage = () => {
  return (
    <QuestPage
      title={"Копнём глубже"}
      question={"В этот раз реально придётся поискать"}
      image={tidehunter}
      answer={"ММР"}
      backgroundColor={"#90ffbc"}
      correctText={"Я хочу тебя типнуть!"}
      incorrectText={"Ты новичок?"}
      to={"/pineapple"}
    />
  );
};
