import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
//router, si on met pas le react-router-dom on appel tt react 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { NotFound } from "./pages/NotFound"
import { Projects } from "./pages/Projects"
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer"

function App() {
  return (
    <Fragment>
        <BrowserRouter>
      {/*Switch permet de vérifié que la page existe sinon elle envoie une page d'erreur 404 */}
        <Switch>      
          {/*Qui conrespond au components (composant) de la page Home*/ }
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/Projects" exact component={Projects}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
