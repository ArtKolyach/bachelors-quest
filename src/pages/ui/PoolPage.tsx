import { QuestPage } from "./QuestPage.tsx";
import tidehunter from "../../assets/tidehunter.png";

export const PoolPage = () => {
  return (
    <QuestPage
      title={"Копнём глубже"}
      image={tidehunter}
      answer={"ММР"}
      backgroundColor={"#90ffbc"}
      correctText={"Я хочу тебя типнуть!"}
      incorrectText={"Ты новичок?"}
    />
  );
};
