import { useState } from "react";

export default function TwoCountersShort({ initialCount1, initialCount2 }) {
  const [{ count1, count2 }, setCount] = useState({
    count1: initialCount1,
    count2: initialCount2,
  });

  return (
    <div>
      <button
        onClick={() =>
          setCount({
            count1: count1 + 1,
            count2: count2,
          })
        }
      >
        inc
      </button>
      <p>{count1}</p>
      <button
        onClick={() =>
          setCount({
            count1: count1,
            count2: count2 + 1,
          })
        }
      >
        inc
      </button>
      <p>{count2}</p>
    </div>
  );
}
