import { Flex, Input, Typography, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router";
import styles from "./QuestPage.module.css";

type Props = {
  backgroundColor: string;
  title: string;
  question?: string;
  answer: string;
  image: string;
  to?: string;
  correctText?: string;
  incorrectText?: string;
};

export const QuestPage = ({
  title,
  question,
  answer,
  image,
  to,
  backgroundColor,
  correctText,
  incorrectText,
}: Props) => {
  const [value, setValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [passed, setPassed] = useState(false);

  const handleSend = () => {
    if (value.trim().toLowerCase() === answer.toLowerCase()) {
      messageApi.success(correctText ?? "Правильно! 🎉");
      setPassed(true);
    } else {
      messageApi.error(incorrectText ?? "Неправильно, попробуй ещё раз :(");
      setValue("");
    }
  };

  return (
    <Flex
      style={{
        background: backgroundColor,
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      {contextHolder}
      <Flex
        vertical
        justify={"start"}
        align={"center"}
        gap={10}
        style={{ marginTop: "100px", width: "100%", padding: "0 10px" }}
      >
        <img className={styles.image} src={image as string} alt="alt" />
        <Typography.Title
          level={5}
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          {title}
        </Typography.Title>
        <Typography.Text>
          {question ?? "Найди и вбей заветное слово"}
        </Typography.Text>
        <Flex gap={5}>
          <Input
            disabled={passed}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onPressEnter={handleSend}
          />
          <Button
            disabled={passed}
            onClick={handleSend}
            icon={<SendOutlined />}
          />
        </Flex>
        {to && (
          <Link hidden={!passed} to={to}>
            <Button type="primary">Дальше</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
