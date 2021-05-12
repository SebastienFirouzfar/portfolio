import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
//router, si on met pas le react-router-dom on appel tt react 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Contact } from '../pages/Contact'
import { About } from '../pages/About'
import { NotFound } from "../pages/NotFound"
import { Projects } from "../pages/Projects"
import { Home } from "../pages/Home";
import { Footer } from "./Footer"

function App() {
  return (
    <Fragment>
        <BrowserRouter>
      {/*Switch permet de vérifié que la page existe sinon elle envoie une page d'erreur 404 */}
        <Switch>      
          {/*Qui conrespond au components (composant) de la page Home*/ }
          <Route exact path="/" component={Home} />
          <Route path="/About" exact component={About}/>
          <Route path="/Projects" exact component={Projects}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </Fragment>
  );
}

export default App;
