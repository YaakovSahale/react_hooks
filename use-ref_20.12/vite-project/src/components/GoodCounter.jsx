import { useEffect, useRef, useState } from "react";

const GoodCounter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0)
  counterRef.current = count
  const tempCount = count

  useEffect(()=>{
    setInterval(() => {
        setCount( counterRef.current +1)
    }, 1000);
  },[])
  

  return <div>{count}</div>;
};

export default GoodCounter;



