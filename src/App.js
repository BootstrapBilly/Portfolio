//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SimpleReactLightbox from "simple-react-lightbox";

//Components
import Projects from "./Pages/Projects/Projects"
import Technologies from "./Pages/Technologies/Technologies"
import Education from "./Pages/Education/Education"
import AboutMe from "./Pages/AboutMe/AboutMe"

const App = () => {

  return (
    <SimpleReactLightbox>

      <BrowserRouter basename="/">

        <Switch>

          <Route path="/" exact component={Projects} />
          <Route path="/technologies" exact component={Technologies} />
          <Route path="/education" exact component={Education} />
          <Route path="/about-me" exact component={AboutMe} />

        </Switch>

      </BrowserRouter>
      
    </SimpleReactLightbox>

  );

}

export default App;
