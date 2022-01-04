import { useContext } from "react";
import { ApartmentContext } from "../context/ApartmentContext";

const Level4 = () => {
  const room = useContext(ApartmentContext);
  return (
    <div>
      <h2>Level4</h2>
      <p>{room.name}</p>
    </div>
  );
};
 
export default Level4;
