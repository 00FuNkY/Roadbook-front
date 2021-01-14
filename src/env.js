require("dotenv").config();

export const API_URL =
  process.env.REACT_APP_BASE_URL || "http://localhost:5000";
