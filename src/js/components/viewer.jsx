import React, { Component } from 'react'

export default class Viewer extends Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  render () {
    var imgSrc = 'img/portfolio/' + this.context.router.getCurrentParams().pictureUrl;
    return (
        <div id='viewer'>
            <img src={imgSrc} />
        </div>
    );
  }

}
