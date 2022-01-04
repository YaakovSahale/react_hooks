import { UserContext } from "../context/UserContext";
import Level2 from "./Level2";

const Level1 = () => {
  const user = {
    name: "asras",
    email: "123@asd",
  };

  return (
    <div>
      <h2>Level1</h2>
      <UserContext.Provider value={user}>
        <Level2 />
      </UserContext.Provider>
    </div>
  );
};

export default Level1;
