import { useEffect, useState } from "react";

export default function MyComponent() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("use effect is called");
  });

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Toggle</button>
    </div>
  );
}
