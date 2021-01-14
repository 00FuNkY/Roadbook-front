import Home from "./components/Home";
import GlobalStyle from "./globalStyle";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CityPage from "./components/Citypage.";
import Connection from "./components/Connection";
import { context } from "./components/context";

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
  const [tokenApp, setTokenApp] = useState();
  const [userId, setUserId] = useState(null);
  const [userImages, setUserImages] = useState();
  const [loading, setLoading] = useState(true)

  const checkToken = () => {
    if (tokenApp) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <context.Provider value={{ tokenApp, setTokenApp, userId, setUserId, userImages, setUserImages, loading, setLoading }}>
          {checkToken() ? (
            <Switch>
              <Route exact path="/city">
                <Home x={x} y={y} />
              </Route>
              <Route path="/city/:id">
                <CityPage />
              </Route>
            </Switch>
          ) : (
            <Connection exact path="/" />
          )}
        </context.Provider>
      </Router>
    </div>
  );
}

export default App;
