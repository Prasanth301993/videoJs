import React from 'react';
import videojs from 'video.js'
import './VideoJs.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import "videojs-overlay"
import "videojs-overlay/dist/videojs-overlay.css"
import DynComp from './components/dynComp';
import mobilePlayControl from './components/mobilePlayControl';

require('videojs-seek-buttons');

export default class VideoPlayer extends React.Component {

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
    let overlay_content = '<div class="myOverlay"><h2>Why do we crave cabs for night?</h2></div>';
    let find='<div class="myOverlay"><div class="ytp-gradient-bottom" data-layer="8" style="height: 124px; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAB8CAYAAACoqdqWAAAA30lEQVQoU2XIV0cFAACG4dPenfYep733nqe9SySRJJJIEkkkiSSSRBJJIon0I/PcnJu+i8frCwT+LcoTjRjEIg7xSEAikpCMFKQiDekIIgOZyEI2cpCLPOSjAIUoilCsSlCKMpQjhApUogrVqEEt6lCPBjSiCc1oQSva0I4OdKIrQrfqQS/60I8BDGIIwxjBKMIYwzgmMIkpTGMGs5jDPBawiCUsYwWrWMM6NrCJLWxjB7vYwz4OcIgjHOMEpzjDOS5wiStc4wa3uMM9HvCIJzzjBa94wzs+8IkvfOMHv39IIyCLuuKCTAAAAABJRU5ErkJggg==&quot;);"></div></div>'
    this.player.overlay({
      overlays: [
        {
        start: 'loadstart',
        content: overlay_content,
        showBackground: false,
        end: 'playing',
        align: 'top-left'
      },
      {
        start: 'pause',
        content: overlay_content,
        showBackground: false,
        end: 'playing',
        align: 'top-left'
      },
      {
        start: 'mouseover',
        content: overlay_content,
        showBackground: false,
        end: 'mouseout',
        align: 'top-left'
      },
      {
        start: 'loadstart',
        content: find,
        showBackground: false,
        end: 'playing',
        align: 'top-left',
        class:"ytp-gradient"
      },
      {
        start: 'pause',
        content: find,
        showBackground: false,
        end: 'playing',
        align: 'top-left',
        class:"ytp-gradient"
      },
      {
        start: 'mouseover',
        content: find,
        showBackground: false,
        end: 'mouseout',
        align: 'top-left',
        class:"ytp-gradient"
      }
      ]
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
        <video ref={node => this.videoNode = node} className="video-js vjs-default-skin breathe">
        </video>
      </div>
    )
  }
}