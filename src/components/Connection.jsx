import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { context } from "./context";
import Sign from "./Sign";

const axios = require("axios");

function Connection() {
  const history = useHistory();

  const { setTokenApp, tokenApp } = useContext(context);

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3090/auth", {
        email: form.email,
        password: form.password,
      })
      .then((res) => setTokenApp(res.data.token))

      .then(history.push("/city"));
  };

  useEffect(() => {
    console.log(tokenApp);
  }, [tokenApp]);
  const [form, setForm] = useState({});

  return (
    <>
      <form>
        <h1>Connexion</h1>
        <label htmlFor="email">
          email :
          <input
            type="text"
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label htmlFor="password">
          password :
          <input
            type="text"
            name="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>
        <button type="submit" value="Submit" onClick={(e) => sendData(e)}>
          ENVOYER
        </button>
      </form>

      <Sign />
    </>
  );
}

export default Connection;
