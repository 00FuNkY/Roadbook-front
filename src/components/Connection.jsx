import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const axios = require("axios");

function Connection() {
  const [token, setToken] = useState("");

  const sendData = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost:5000/auth", {
      email: form.email,
      password: form.password,
    })
    .then(res => setToken(res.data))
    .then(() => localStorage.setItem('token', token))
  }

  const [form, setForm] = useState({});



  return (
    <StyledForm>
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
    </StyledForm>
  );
}

const StyledForm = styled.form`

`

export default Connection;
