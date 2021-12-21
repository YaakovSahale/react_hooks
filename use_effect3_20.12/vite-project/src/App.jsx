import { useState } from "react";
import "./App.css";
import ShowUnmount from "./components/ShowUnmount";
import Clock from "./components/Clock";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>click</button>
      {/* {flag?<ShowUnmount/>:""}  */}
      {flag ? <Clock /> : null}
    </div>
  );
}

export default App;
