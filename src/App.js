//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Home from "./Pages/Home/Home"
import Projects from "./Pages/Projects/Projects"
import Technologies from "./Pages/Technologies/Technologies"
import Education from "./Pages/Education/Education"

const App = () => {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/projects" exact component={Projects} />
        <Route path="/technologies" exact component={Technologies} />
        <Route path="/education" exact component={Education} />
        <Route path="/" component={Home} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;
