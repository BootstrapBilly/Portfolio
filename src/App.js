//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Home from "./Pages/Home/Home"

const App = () => {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Home} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;
