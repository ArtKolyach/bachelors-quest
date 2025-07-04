import { TrophyOutlined } from "@ant-design/icons";
import { QuestPage } from "./QuestPage.tsx";

export const PoolPage = () => {
  return (
    <QuestPage
      question={"А?"}
      icon={<TrophyOutlined />}
      answer={"Плыви"}
      backgroundColor={"#bbff90"}
    />
  );
};
