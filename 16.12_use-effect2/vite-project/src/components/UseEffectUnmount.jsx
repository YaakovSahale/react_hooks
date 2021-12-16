import { useEffect } from "react";

export default function useEffectUnmount() {
    
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  });

  return (
    <div>
      <h1>side effect - unmount</h1>
    </div>
  );
}
