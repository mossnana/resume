import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components Routing
import App from './App';
import About from './sections/About';
import Resume from './sections/Resume';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
// Imported CSS
import './css/ionicons.min.css';
import './css/bootstrap/bootstrap.min.css';
import './css/main.css';
import './css/style.css';
import './css/responsive.css';
import './css/font-awesome-animation.min.css';

render(
  <Router basename="/">
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
  </Router>,
  document.getElementById('root')
);