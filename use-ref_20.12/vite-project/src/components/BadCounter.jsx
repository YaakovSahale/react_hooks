import { useEffect, useState } from "react";

const BadCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
};

export default BadCounter;
