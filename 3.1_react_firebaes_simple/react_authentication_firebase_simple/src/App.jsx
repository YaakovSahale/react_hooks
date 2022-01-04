import Register from "./components/Register";
import LogIn from "./components/LogIn";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(null);
  const LOCAL_AUTH = "localAuth"

  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem(LOCAL_AUTH));
    localAuth ? setAuth(localAuth) : null;
  }, []);

  return (
    <div className="App">
      <Register setAuth={setAuth} LOCAL_AUTH={LOCAL_AUTH}/>
      <LogIn setAuth={setAuth} LOCAL_AUTH={LOCAL_AUTH}/>
      <button
        onClick={() => {
          setAuth(null);
          localStorage.removeItem(LOCAL_AUTH)
        }}
      >
        sign out
      </button>
      <p>{auth ? `user is sign in` : "user is sign out"}</p>
    </div>
  );
}

export default App;
