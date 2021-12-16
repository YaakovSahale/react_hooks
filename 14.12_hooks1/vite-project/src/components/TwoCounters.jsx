import { useState } from "react";
import Counter from "./Counter";

export default function TwoCounters({initialCount1,initialCount2}) {
  return <div>
      <Counter initialCount={initialCount1}/>
      <Counter initialCount={initialCount2}/>
  </div>;
}


