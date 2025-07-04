import { QuestPage } from "../../pages/ui/QuestPage";
import type { RouteObject } from "react-router";
import { TrophyOutlined } from "@ant-design/icons";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "paper-plane?",
        element: (
          <QuestPage
            icon={<TrophyOutlined />}
            question={"Вань, ты дурак совсем?"}
            answer={"Лети"}
            to={"/pool"}
            backgroundColor={"#ffba5f"}
          />
        ),
      },
      {
        path: "pool",
        element: (
          <QuestPage
            question={"А?"}
            icon={<TrophyOutlined />}
            answer={"Плыви"}
            backgroundColor={"#bbff90"}
          />
        ),
      },
    ],
  },
];
