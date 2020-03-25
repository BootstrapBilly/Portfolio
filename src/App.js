//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Projects from "./Pages/Projects/Projects"
import Technologies from "./Pages/Technologies/Technologies"
import Education from "./Pages/Education/Education"
import AboutMe from "./Pages/AboutMe/AboutMe"

const App = () => {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/projects" exact component={Projects} />
        <Route path="/technologies" exact component={Technologies} />
        <Route path="/education" exact component={Education} />
        <Route path="/about-me" exact component={AboutMe} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;
