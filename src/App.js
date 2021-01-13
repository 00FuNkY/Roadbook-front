import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import GlobalStyle from "./globalStyle";
import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

function App() {
  const { x, y } = useMousePosition();

  return (
    <div className="App">
      <GlobalStyle />
      <Home x={x} y={y} />
    </div>
  );
}

export default App;
