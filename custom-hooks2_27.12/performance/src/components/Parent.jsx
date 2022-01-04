import { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);

  const memoChild = useMemo(() => <Child count={count} />, [count]);

  return (
    <div>
      <br />
      <button onClick={() => setCount(count + 1)}>change color</button>
      <p
        style={{ color: flag ? "red" : "green" }}
        onClick={() => setFlag(!flag)}
      >
        Hi there, im using what'sApp
      </p>
      {/* <Child count={count}/> */}
      {memoChild}
    </div>
  );
};

export default Parent;
