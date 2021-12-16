import { useState } from "react";

export default function counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <p>{count}</p>
    </div>
  );
}
