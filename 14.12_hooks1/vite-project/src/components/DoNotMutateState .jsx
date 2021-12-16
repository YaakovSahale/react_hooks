import { useState } from "react";

const DoNotMutateState = () => {
  const [ar, setAr] = useState([1, 2, 3]);

  return (
    <div>
      <button
        onClick={() => {
          const newAr = [...ar];
          newAr[0] = 11;
          setAr(newAr);
        }}
      >
        Click
      </button>
      {ar.map((it, index) => (
        <p key={index}>{it}</p>
      ))}
    </div>
  );
};

export default DoNotMutateState;
