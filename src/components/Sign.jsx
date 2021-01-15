import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { context } from "./context";
import { API_URL } from "../env";
import styled from "styled-components";

const axios = require("axios");

function Sign() {
  const history = useHistory();

  const { setTokenApp } = useContext(context);

  const sendData = (e) => {
    // e.preventDefault();

    axios
      .post(`${API_URL}/auth/sign`, {
        email: form.email,
        password: form.password,
      })
      .then((res) => setTokenApp(res.data))

      .then(history.push("/"));
  };
  const [form, setForm] = useState({});

  return (
    <form>
      <h1>Inscription</h1>
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

// const StyledForm = styled.form`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 10em;
// `;
// const StyledLabel = styled.label`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 20em;
// `;
export default Sign;
