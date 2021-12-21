import { useEffect } from "react";

const ShowUnmount = () => {
  useEffect(() => () => console.log("bye"));

  return (
    <div>
      <h1>ShowUnmount Components</h1>
    </div>
  );
};

export default ShowUnmount;
