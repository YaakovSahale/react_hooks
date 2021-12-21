import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import TitleCounter from "./components/TitleCounter";
import MyComponent from "./components/MyComponent";
import GetPostById from "./components/GetPostById";
import UseEffectUnmount from "./components/UseEffectUnmount";

function App() {
  const [id, setId] = useState(1);
  // const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      {/* <Posts /> */}
      {/* <TitleCounter/> */}
      {/* <MyComponent/> */}

      <GetPostById id={id} setId={setId} />
      <input type="number" onChange={(e) => setId(e.target.value)} />

      {/* <button onClick={() => setFlag(!flag)}>click me</button> */}
      {/* {flag ? <UseEffectUnmount /> : null} */}
    </div>
  );
}

export default App;
