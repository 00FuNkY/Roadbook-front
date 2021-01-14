const { useHistory } = require("react-router-dom");

function checkToken() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (!token) {
    return history.push("/");
  }
}

module.exports = checkToken;
