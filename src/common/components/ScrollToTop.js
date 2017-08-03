/*
 * Unigram Website
 * Copyright © 2016-2017 Unigram <team@unigram.me>
 * Licensed under MIT 
 * (https://github.com/UnigramDev/unigram.me/blob/master/LICENSE)
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

/**
 * @class Component that scrolls the page to top when navigating with 
 * react-router.
 * 
 * @extends React.Component
 * @author Matei Bogdan Radu <matei.radu.92@gmail.com>
 */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return(<div>{this.props.children}</div>)
  }
}

export default withRouter(ScrollToTop)