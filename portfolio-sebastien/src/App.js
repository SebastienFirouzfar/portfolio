import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <div className="App">
        <p>Je suis la </p>
        <Home/>
      </div>
    </Fragment>
  );
}

export default App;
