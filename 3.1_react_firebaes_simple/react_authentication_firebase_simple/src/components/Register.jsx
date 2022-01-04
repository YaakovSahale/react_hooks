import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../logic/keys";

const Register = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState(false);

  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  const getData = (e) => {
    e.preventDefault();
    axios
      .post(URL, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setAuth(res);
        const localAuth = JSON.stringify(res);
        localStorage.setItem(LOCAL_AUTH, localAuth);
      })
      .catch((error) => {
        console.error(error);
        setErrorFromServer(true);
      });
  };

  return (
    <form onSubmit={getData}>
      <br />
      <input
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value={"Register"} />

      <p style={{ color: "red" }}>{errorFromServer ? "error" : null}</p>
    </form>
  );
};

export default Register;
