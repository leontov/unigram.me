/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero-root">
        <div className="jumbotron-wrapper container">
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <h1>Unigram</h1>
                  <div className="sh1">
                    The Telegram client for Windows 10
                  </div>
                  <p>
                    Unigram is an open-source project that aims to provide the best Telegram
                    experience on any Windows 10 devices, built by the community for the community.
                  </p>
                  <div className="jumbotron-btn-group">
                    <a className="btn btn-primary" href="#">Download</a>
                    <a className="btn btn-secondary" href="#">Learn more</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="jumbotron-device-group">
                    <div className="device-container" id="jumbotron-desktop">
                      <div className="device-mockup surface-laptop landscape">
                        <div className="device">
                          <div className="screen">
                            <img className="img-fluid" src="img/screenshots/desktop-wide-1.png" alt="Screenshot: chat list"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="device-container" id="jumbotron-mobile">
                      <div className="device-mockup lumia950 portrait">
                        <div className="device">
                          <div className="screen">
                            <img className="img-fluid" src="img/screenshots/mobile-list-1.png" alt="Screenshot: chat list"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;