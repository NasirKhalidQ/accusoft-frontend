import "./App.css";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Features from "./Features";
import Faq from "./FAQ";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";
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
