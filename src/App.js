import Home from './components/Home';
import GlobalStyle from './globalStyle';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CityPage from './components/Citypage.';
import Connection from './components/Connection';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

function App() {
  const { x, y } = useMousePosition()
  const token = localStorage.getItem('token')

  // useEffect(() => {
  //   const temp = localStorage.getItem('token');
  //   setToken(temp)
  //   console.log(token);
  //   console.log(localStorage.token);
  // }, [])
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        {!token ?
          <Connection exact path='/' />
          :
          <Switch>
            <Route exact path='/home'>
              <Home x={x} y={y} />
            </Route>
            <Route path='/home/:id'>
              <CityPage />
            </Route>
          </Switch>
        }
      </Router>
    </div >
  );
}

export default App;
