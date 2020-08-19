//core react
import React from 'react';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Components
import Landing from "./Pages/Landing/Landing"
import Projects from "./Pages/Projects/Projects"
import Education from "./Pages/Education/Education"
import Skills from "./Pages/Skills/Skills"
import Blog from "./Pages/Blog/Blog"


const App = () => {

  return (

    <BrowserRouter basename="/">

      <Switch>

        <Route path="/" exact component={Landing} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/technologies" exact component={Skills} />
        <Route path="/education" exact component={Education} />

      </Switch>

    </BrowserRouter>


  );

}

export default App;
