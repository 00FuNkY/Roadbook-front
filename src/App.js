import "./App.css";
import Home from "./components/Home";
import GlobalStyle from "./globalStyle";
import { useEffect, useState } from "react";
// import Upload from "./components/Upload";
// import SimpleReactFileUpload from "./components/UploadTest";
// import FileUploadPage from "./components/FileUploadPage";
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
      {/* <Upload />
      <SimpleReactFileUpload />
      <FileUploadPage /> */}
    </div>
  );
}

export default App;
