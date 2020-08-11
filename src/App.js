import React from 'react';
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import project1 from "./components/project1"
import project2 from "./components/project2"
import project3 from "./components/project3"
function App() {
  return (
    <>
    <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/project1" component={project1}/>
      <Route path="/project2" component={project2}/>
      <Route path="/project3" component={project3}/>
    </>
  );
}

export default App;
