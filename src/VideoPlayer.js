import React from 'react';
import videojs from 'video.js'
import './VideoJs.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import toDo from './components/toDo';
import Favorite from './components/Favorite';

require('videojs-seek-buttons');

export default class VideoPlayer extends React.Component {

  state = {
    refresh: false
  }

  componentDidMount() {
    console.log(this)
    let that = this;

    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);

    });

    // this.player.getChild('controlBar').addChild('toDo', { style: { lineHeight: "3em", height: "100%", cursor: "pointer" }, text: "+To Do", callback: function(){ console.log("test ") } });
    
    let seekTime = (seek, skipBy) => {
      if (seek) {
        if (seek == "forward") {
          this.player.currentTime(this.player.currentTime() + skipBy);
        } else {
          this.player.currentTime(this.player.currentTime() - skipBy);
        }
      } else {
        this.player.play()
      }
    }

    this.player.on('pause', function () {


    });

    this.player.on('play', function () {

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
    console.log(this.props)
    return (
      <div data-vjs-player ref={node => this.mainNode = node}>
        <video ref={node => this.videoNode = node} className="video-js vjs-default-skin">
        </video>
      </div>
    )
  }
}