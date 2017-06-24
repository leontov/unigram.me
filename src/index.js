/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Home page of the site. It renders all the components, from navigation to footer.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './common/components/Navigation';
import Footer from './common/components/Footer';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './pages/home/HomePage';
import PrivacyPage from './pages/privacy/PrivacyPage';
import SupportPage from './pages/support/SupportPage';
import FaqPage from './pages/faq/FaqPage';
import ScrollToTop from './common/components/ScrollToTop';
import NotFound from './common/components/NotFound';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

/* Render in top-bottom order all components. */
ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/privacy" component={PrivacyPage}/>
        <Route path="/support" component={SupportPage}/>
        <Route path="/faq" component={FaqPage}/>
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </ScrollToTop>
  </Router>, document.body
);
/* Register service worker. */
registerServiceWorker();
