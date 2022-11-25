import Button from "../../components/atoms/Button";
import Text from "../../components/atoms/Text";
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUp = () => setCount(count + 1);
  const handleDown = () => setCount(count - 1);
  return (
    <>
      <Text text="SAYAÇ" />
      <div style={styles.container}>
        <Button up onClick={handleUp} />
        <Text text={count} />
        <Button down onClick={handleDown} />
      </div>
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "2rem",
  },
};
export default Counter;
