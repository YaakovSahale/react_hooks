import { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef()

  return (
    <div>
        <button onClick={()=> inputRef.current.focus()}>click to focus</button>
        <input ref={inputRef} type="text" />
    </div>
  );
};

export default FocusInput;
