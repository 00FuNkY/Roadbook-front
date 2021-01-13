import { useState } from "react";
const axios = require("axios");

function Connection() {
  const [token, setToken] = useState("");

  const sendData = () =>
    axios
      .post("http://localhost:3090/auth", {
        email: form.email,
        password: form.password,
      })
      .then((res) => setToken(res.token))
      .then(console.log("this is token", token));

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
      <button type="submit" value="Submit" onSubmit={sendData}>
        ENVOYER
      </button>
    </form>
  );
}

export default Connection;
