import { QuestPage } from "../QuestPage.tsx";
import boxPng from "../../../assets/box.png";

export const StartPage = () => {
  return (
    <QuestPage
      backgroundColor={"#ffee9a"}
      title={"На старт!"}
      question={"Введи место, в которое мы приедем"}
      answer={"Картинг"}
      image={boxPng}
      to={"/paper"}
      correctText={"Я-ху!"}
    />
  );
};
