import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Bee from "./pages/Bee.jsx";
import Honey from "./pages/Honey.jsx";
import Ingredients from "./pages/Ingredients.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bee" component={Bee} />
        <Route path="/honey" component={Honey} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
