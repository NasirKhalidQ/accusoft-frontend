import "./App.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Services from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
