/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */

/**
 * @file Navigation bar component.
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
import React from 'react';
import * as Const from '../data/Constants';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation-root">
    <nav className="navbar fixed-top navbar-toggleable-md" id="main-nav">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <img src="img/buttons/unigram.svg" alt="Unigram Logo"/>Unigram
        </Link>
        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">
                <i className="mdl2 mdl2-favorite-list" aria-hidden="true"></i>Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Const.DownloadLink}>
                <i className="mdl2 mdl2-download" aria-hidden="true"></i>Download
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                <i className="mdl2 mdl2-people" aria-hidden="true"></i>Community
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/support'}>
                <i className="mdl2 mdl2-accounts" aria-hidden="true"></i>Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <button className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#navbarExample" type="button" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
        <img src="img/buttons/menu.svg" alt=""/>
      </button>
    </nav>
  </div>
);

export default Navigation;