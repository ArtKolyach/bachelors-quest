import { Flex, Typography } from "antd";
import styles from "./FinalPage.module.css";
import cakePng from "../../assets/cake.png";

export const FinalPage = () => {
  return (
    <Flex
      vertical
      align="center"
      style={{
        background: "#faa07d",
        width: "100%",
        height: "100%",
        display: "flex",
        paddingTop: 20,
      }}
    >
      <Typography.Text className={styles.title}>День твой</Typography.Text>
      <Typography.Text className={styles.title}>
        последний приходит
      </Typography.Text>
      <Typography.Text className={styles.finalWord}>БУРЖУЙ</Typography.Text>
      <img src={cakePng} style={{ height: 400 }} />
    </Flex>
  );
};
