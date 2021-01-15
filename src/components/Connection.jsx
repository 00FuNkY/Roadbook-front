import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { context } from "./context";
import Sign from "./Sign";
import { API_URL } from "../env";
import styled from "styled-components";

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
        setTokenApp(res.data.token);
        setUserId(res.data.id);
      })
      .then(history.push("/city"));
  };

  return (
   
    <>
    <StyleForm>
      <form>
        <h1>Connexion</h1>
        <h4>EMAIL</h4>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <h4>PASSWORD</h4>
        <label htmlFor="password">
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
      </StyleForm>
      <Sign />
    </>
  );
}

const StyleForm = styled.form`
form {
	display: flex;
	justify-content: center;
	align-items: center;
  flex-direction: column;
  padding: 40px;
}

label {
  margin: 5px;
}

input {
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

button {
	border-radius: 20px;
	border: 1px solid #6540FE;
	background-color: #6540FE;
	color: white;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
};

h1 {
  color: #6540FE;
}
`


export default Connection;
