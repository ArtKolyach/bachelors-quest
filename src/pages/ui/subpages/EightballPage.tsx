import { QuestPage } from "../QuestPage.tsx";
import carPng from "../../../assets/car.png";

export const EightballPage = () => {
  return (
    <QuestPage
      backgroundColor={"rgba(93,139,255,0.62)"}
      title={"Куда дальше?"}
      question={
        "Выясни, какое развлечение есть в следующем пункте нашей программы"
      }
      answer={"Бильярд"}
      image={carPng}
      to={"/paper"}
    />
  );
};
