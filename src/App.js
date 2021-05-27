import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useState } from 'react';
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";


function App() {
    const [count , setCount] = useState(0);
    const [inCart, setInCart] = useState(false)

    const handleClick = (evt) => {
        evt.preventDefault()
        const newCount = count;
        setCount(newCount + 1);
    }

    return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/shop" component={Shop} />
                  <Route path="/about" component={About} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/" render={() => {return <Home count={count} handleClick={handleClick}/> }} />
                  {/*<Route path="/"*/}
                  {/*       render={() => {return <Home items={data} error={error} isLoaded={isLoaded}/>}*/}
                  {/*       } />*/}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
