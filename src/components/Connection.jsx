import { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

function Connection() {
  const [token, setToken] = useState("");
  const history = useHistory();

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3090/auth", {
        email: form.email,
        password: form.password,
      })
      .then((res) => setToken(res.data.token))

      .then(() => localStorage.setItem("token", token))

      .then(history.push("/home"));
  };
  const [form, setForm] = useState({});

  return (
    <form>
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
  );
}

export default Connection;
