import "./App.css";
import Level1 from "./components/Level1";
import { ApartmentContext } from "./context/ApartmentContext";

function App() {
  const room = {
    name: "living room",
    number: 1,
    description: "lorem loremy",
  };

  const room2 = {
    name: "bathroom",
    number: 3,
    description: "loremenu",
  };

  return (
    <div className="App">
      <ApartmentContext.Provider value={room}>
        <Level1 />
      </ApartmentContext.Provider>
    </div>
  );
}

export default App;
