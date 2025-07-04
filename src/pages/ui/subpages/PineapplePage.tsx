import { QuestPage } from "../QuestPage.tsx";
import hat from "../../../assets/hat.png";

export const PineapplePage = () => {
  return (
    <QuestPage
      backgroundColor={"#ff3d3d"}
      title={"Вспомним классиков"}
      question={"Укажи последнее слово загаданной цитаты"}
      answer={"Буржуй"}
      image={hat}
    />
  );
};
