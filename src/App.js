import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Bee from "./pages/Bee.jsx";
import Honey from "./pages/Honey.jsx";
import Ingredients from "./pages/Ingredients.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BeeDetail from "./components/BeeDetail.jsx";
import HoneyDetail from "./components/HoneyDetail.jsx";
import IngredientDetail from "./components/IngredientDetail.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bee" component={Bee} />
          <Route path="/honey" component={Honey} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/contact" component={Contact} />
          <Route path="/ari/:id" component={BeeDetail} />
          <Route path="/asal/:id" component={HoneyDetail} />
          <Route path="/ingradient/:id" component={IngredientDetail} />

          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
