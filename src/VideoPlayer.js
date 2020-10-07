import React from 'react';
import videojs from 'video.js'
import './VideoJs.css'
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';

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

      setTimeout(() => {

        let customButtons = that.mainNode.querySelectorAll(".vjs-custom-button")[0]
        let play = that.mainNode.querySelectorAll(".vjs-play-control")[0].cloneNode(true);

        play.onclick = function () {
          seekTime()
        }

        customButtons.append(play)

      }, 50);

    });

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

      console.log(that.videoNode)

      let customButtons = that.mainNode.querySelectorAll(".vjs-custom-button")[0]
      let rewind = that.mainNode.querySelectorAll(".vjs-seek-button.skip-back")[0].cloneNode(true);
      let play = that.mainNode.querySelectorAll(".vjs-play-control")[0].cloneNode(true);
      let forward = that.mainNode.querySelectorAll(".vjs-seek-button.skip-forward")[0].cloneNode(true)

      play.onclick = function () {
        seekTime()
      }

      rewind.onclick = function () {
        seekTime("rewind", 15)
      }

      forward.onclick = function () {
        seekTime("forward", 15)
      }

      customButtons.append(rewind)
      customButtons.append(play)
      customButtons.append(forward)

    });

    this.player.on('play', function () {

      let length = that.mainNode.querySelectorAll(".vjs-custom-button")[0].childNodes.length

      for (let i = 0; i < length; i++) {
        that.mainNode.querySelectorAll(".vjs-custom-button")[0].childNodes[0].remove()
      }

    });

    this.player.addClass('vjs-matrix')

    var customButtons = this.player.addChild('button');
    customButtons.el();
    customButtons.addClass("vjs-custom-button");

    var toDoButton = this.player.controlBar.addChild("button");
    var toDoButtonDom = toDoButton.el();
    toDoButtonDom.innerHTML = "+To Do";
    toDoButtonDom.onclick = function () {
        alert("")
    }

    this.player.controlBar.el().insertBefore(toDoButtonDom,this.player.controlBar.fullscreenToggle.el());
    
    var favButton = this.player.controlBar.addChild("button");
    var favButtonDom = favButton.el();    
    var favIcon = document.createElement("i");

    if(this.props.isFav){
      favIcon.setAttribute("class", "fa fa-heart");
      favIcon.setAttribute("title", "- favorites");
    } else {
      favIcon.setAttribute("class", "fa fa-heart-o");
      favIcon.setAttribute("aria-hidden", "true");
      favIcon.setAttribute("title", "+ favorites");
    }

    favIcon.style.fontSize = "14px";
    favIcon.style.cursor = "pointer";
    favIcon.setAttribute("aria-hidden", "true");

    favButtonDom.append(favIcon);
    favButtonDom.onclick = function () {
      that.props.onFavSelect(that.props.isFav)

      let favIconDeselected = that.mainNode.querySelectorAll(".fa.fa-heart-o")[0]
      let favIconSelected = that.mainNode.querySelectorAll(".fa.fa-heart")[0]

      if(favIconDeselected){
        favIconDeselected.classList.remove("fa-heart-o")
        favIconDeselected.classList.add("fa-heart")
      } 
      
      if(favIconSelected) {
        favIconSelected.classList.remove("fa-heart")
        favIconSelected.classList.add("fa-heart-o")
      }
 
    }
    this.player.controlBar.el().insertBefore(favButtonDom,toDoButtonDom);

    var checkButton = this.player.controlBar.addChild("button");
    var checkButtonDom = checkButton.el();    
    var checkIcon = document.createElement("i");    
    checkIcon.setAttribute("class", "fa fa-check-o");
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.style.fontSize = "14px";

    checkButtonDom.append(checkIcon);
    this.player.on('ended', function () {
        that.props.onFavSelect(that.props.isFav)
  
        let checkIconDeselected = that.mainNode.querySelectorAll(".fa.fa-check-o")[0]
        let checkIconSelected = that.mainNode.querySelectorAll(".fa.fa-check")[0]
  
        if(checkIconDeselected){
          checkIconDeselected.classList.remove("fa-check-o")
          checkIconDeselected.classList.add("fa-check")
        } 
        
        if(checkIconSelected) {
          checkIconSelected.classList.remove("fa-check")
          checkIconSelected.classList.add("fa-check-o")
        }
   
      }
    )
   
    this.player.controlBar.el().insertBefore(checkButtonDom,favButtonDom);

    var shareButton = this.player.controlBar.addChild("button");
    var shareButtonDom = shareButton.el();
    var shareIcon = document.createElement("i");
    shareIcon.setAttribute("class", "vjs-icon-share");
    shareIcon.setAttribute("title", "- share");
    shareIcon.style.fontSize = "14px";
    shareIcon.style.cursor = "pointer";
    shareIcon.setAttribute("aria-hidden", "true");
    shareButtonDom.append(shareIcon);
    
    shareButtonDom.onclick = function () {
        alert("")
    }

    this.player.controlBar.el().insertBefore(shareButtonDom,checkButtonDom);

    this.player.seekButtons({
      forward: 15,
      back: 15
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