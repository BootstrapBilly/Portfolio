//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SimpleReactLightbox from "simple-react-lightbox";

//Components
import Projects from "./Pages/Projects/Projects"
import Education from "./Pages/Education/Education"
import About from "./Pages/About/About"
import Skills from "./Pages/Skills/Skills"


const App = () => {

  return (
    <SimpleReactLightbox>

      <BrowserRouter basename="/">

        <Switch>

          <Route path="/" exact component={Projects} />
          <Route path="/technologies" exact component={Skills} />
          <Route path="/education" exact component={Education} />
          <Route path="/about-me" exact component={About} />

        </Switch>

      </BrowserRouter>
      
    </SimpleReactLightbox>

  );

}

export default App;
