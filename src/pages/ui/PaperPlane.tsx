import { TrophyOutlined } from "@ant-design/icons";
import { QuestPage } from "./QuestPage.tsx";

export const PaperPlane = () => {
  return (
    <QuestPage
      icon={<TrophyOutlined />}
      question={"Вань, ты дурак совсем?"}
      answer={"Лети"}
      to={"/pool"}
      backgroundColor={"#ffba5f"}
    />
  );
};
