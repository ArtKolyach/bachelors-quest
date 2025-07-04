import { QuestPage } from "../QuestPage.tsx";
import filmPng from "../../../assets/film.png";

export const ShowPage = () => {
  return (
    <QuestPage
      backgroundColor={"pink"}
      title={"Наша жизнь — это шоу"}
      question={"Но какое?"}
      answer={"Такси"}
      image={filmPng}
      correctText={"И это правильный ответ!"}
      to={"/next"}
    />
  );
};
