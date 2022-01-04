import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Level4 from "./Level4";

const Level3 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Level3</h2>
      <p>{user.name}</p>
      <Level4 />
    </div>
  );
};

export default Level3;
