import React from 'react';
import videojs from 'video.js'
import './VideoJs.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import DynComp from './components/dynComp';

require('videojs-seek-buttons');

export default class VideoPlayer extends React.Component {

  state = {
    refresh: false
  }

  componentDidMount() {   
    this.initializePlayer(this.props)
  }
  
  initializePlayer(props){    
    // instantiate Video.js
    this.player = videojs(this.videoNode, props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  componentWillReceiveProps(nextProps){
    console.log(this.player)
    debugger
    this.player.options(nextProps);
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
    console.log(this.props)
    return (
      <div data-vjs-player ref={node => this.mainNode = node}>
        <video ref={node => this.videoNode = node} className="video-js vjs-default-skin breathe">
        </video>
      </div>
    )
  }
}