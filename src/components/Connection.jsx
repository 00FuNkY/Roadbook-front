import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { context } from "./context";
import Sign from "./Sign";
import { API_URL } from "../env";

const axios = require("axios");

function Connection() {
  const history = useHistory();
  const [form, setForm] = useState({});

  const { setTokenApp, setUserId } = useContext(context);

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth`, {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        setTokenApp(res.data.token)
        setUserId(res.data.id)
      })
      .then(history.push("/city"))
  };

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
