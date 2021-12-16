import { useState } from "react";

const HelloHooks = () => {
  const [flag, setFlag] = useState(true);

  const style = { color: flag ? "red" : "blue" };

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Click</button>
      <p style={style}>Hello Hooks</p>
    </div>
  );
};

export default HelloHooks;

