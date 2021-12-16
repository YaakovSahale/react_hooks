import { useState } from "react";
import HelloHooksProblem from "./components/HelloHooksProblem";
import HelloHooks from "./components/HelloHooks";
import Counter from "./components/Counter";
import TwoCounters from "./components/TwoCounters";
import TwoCountersShort from "./components/TwoCountersShort";
import DoNotMutateState from "./components/DoNotMutateState ";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <TwoCounters initialCount1={5} initialCount2={10}/> */}
      {/* <TwoCountersShort initialCount1={5} initialCount2={10}/> */}
      <DoNotMutateState />
    </div>
  );
}








export default App;

// function App() {
//   const [initialCount, setInitialCount] = useState(0);

//   return (
//     <div className="App">
//       enter a num:
//       <input
//         type="number"
//         onChange={(e) => setInitialCount(Number(e.target.value))}
//       />
//       <Counter initialCount={initialCount} />

//     </div>
//   );
// }

// export default App;
