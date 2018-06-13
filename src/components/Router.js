import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Library from './Library';
import Contact from './Contact';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/library" component={Library} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
