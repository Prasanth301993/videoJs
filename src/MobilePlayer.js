import React from 'react';
import ReactDomServer from 'react-dom/server'
import videojs from 'video.js'
import './VideoJs.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import "videojs-overlay"
import "videojs-overlay/dist/videojs-overlay.css"
import DynComp from './components/dynComp';
import mobilePlayControl from './components/mobilePlayControl';

require('videojs-seek-buttons');

export default class MobilePlayer extends React.Component {

  state = {
    refresh: false
  }

  componentDidMount() {
    let that = this

    this.initializePlayer(this.props)

  }


  initializePlayer(props, dispose) {
    // instantiate Video.js  
    let that = this
    this.player = videojs(this.videoNode, props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  

  // destroy player on unmount
  componentWillUnmount() {
    console.log(this.props)
    if (this.player) {
      this.player.dispose()
    }
  }


  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {

    return (
      <div data-vjs-player ref={node => this.mainNode = node}>
        <video ref={node => this.videoNode = node} className="video-js vjs-default-skin breathe mobile">
        </video>
      </div>
    )
  }
}