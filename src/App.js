import "./App.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Services from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
