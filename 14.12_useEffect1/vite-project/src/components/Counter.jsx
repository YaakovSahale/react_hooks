import { useState, useEffect } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  const x = 9;
  useEffect(() => console.log("component mounted"), []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <p>{count}</p>
    </div>
  );
}
