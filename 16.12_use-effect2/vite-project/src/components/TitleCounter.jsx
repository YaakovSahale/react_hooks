import { useState ,useEffect} from "react";

export default function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count
 });

  return (
    <div
      className="TitleCounterContainer"
      onClick={() => setCount(count + 1)}
    ></div>
  );
}
