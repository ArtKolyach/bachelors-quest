import { Flex, Input, Typography, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { type JSX, useState } from "react";
import { Link } from "react-router";

type Props = {
  backgroundColor: string;
  question: string;
  answer: string;
  icon: JSX.Element;
  to?: string;
};

export const QuestPage = ({
  question,
  answer,
  icon,
  to,
  backgroundColor,
}: Props) => {
  const [value, setValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [passed, setPassed] = useState(false);

  const handleSend = () => {
    if (value.trim().toLowerCase() === answer.toLowerCase()) {
      messageApi.success("Правильно! 🎉");
      setPassed(true);
    } else {
      messageApi.error("Неправильно, попробуй ещё раз :(");
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
        style={{ marginTop: "30%", width: "100%" }}
      >
        {icon}
        <Typography.Text>{question}</Typography.Text>
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
            <Button type="primary">Далее</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
