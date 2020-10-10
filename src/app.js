import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer'
import MobilePlayer from "./MobilePlayer";
import 'video.js/dist/video-js.css'
import { ReactComponent as Fav } from './images/fav.svg';
import { ReactComponent as UnFav } from './images/fav-full.svg';
import { ReactComponent as Share } from './images/share.svg';
import { ReactComponent as Completed } from './images/completed.svg';
import { ReactComponent as Forward } from './images/forward.svg';
import { ReactComponent as Reverse } from './images/backward.svg';
import { ReactComponent as Play } from './images/play.svg';
import { ReactComponent as Pause } from './images/pause.svg';

export default class VideoApp extends React.Component {

    state = {
        isFav: this.props.isFav || false,
        isCompleted: this.props.completed || false,
        isMobile:false
    }

    checkFav = () => {

    }
    componentDidMount() {
        const { player } = this.player
        this.seekTime = (seek, skipBy) => {
            if (seek == "forward") {
                player.currentTime(player.currentTime() + skipBy);
            } else {
                player.currentTime(player.currentTime() - skipBy);
            }
        }

        player.on('play', function () {
            ReactDOM.render(<Pause width={15} />, document.querySelector(".breathe .vjs-play-control"));
        });
        player.on('ended', function () {
            ReactDOM.render(<Play width={15} />, document.querySelector(".breathe .vjs-play-control"));
        })
        player.on('pause', function () {
            ReactDOM.render(<Play width={15} />, document.querySelector(".breathe .vjs-play-control"));
        })
    }

    render() {


        const videoJsOptions = {
            autoplay: true,
            responsive: true,
            breakpoints: {
                medium: 500,
                large: 769,
                small: 350
            },
            aspectRatio: "16:9",
            fluid: false,
            controls: true,
            sources: [{
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                type: 'video/mp4'
            }],
            fill: true,
            isFav: this.state.isFav,
            controlBar: {
                children: [
                    'playToggle',
                    {
                        name: 'DynComp',
                        text: 'Reverse',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: <Reverse width="16" />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "3em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { this.seekTime("rewind", 15) }
                    },
                    {
                        name: 'DynComp',
                        text: 'Forward',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: <Forward width="15" />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "3em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { this.seekTime("forward", 15) }
                    },
                    'volumePanel',
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    {
                        name: 'CustomControlSpacer',
                        text: 'CustomControlSpacer'
                    },
                    {
                        name: 'DynComp',
                        text: 'Share',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: <Share />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { alert("") }
                    },
                    {
                        name: 'DynComp',
                        text: 'Completed',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: <Completed />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { alert("") }
                    },
                    {
                        name: 'DynComp',
                        text: 'Favourite',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: this.state.isFav ? <Fav /> : <UnFav />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { this.setState({ isFav: !this.state.isFav }) }
                    },
                    {
                        name: 'DynComp',
                        text: 'Add To do+',
                        selected: false,
                        className: ["vjs-control", "vjs-button"],
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "6em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { alert("") }
                    },
                    'fullscreenToggle'
                ]
            }

        }
        const videoJsMobileOptions = {
            autoplay: false,
            responsive: true,
            breakpoints: {
                medium: 500,
                large: 769,
                small: 350
            },
            aspectRatio: "16:9",
            fluid: false,
            controls: true,
            sources: [{
                src: 'https://static.videezy.com/system/resources/previews/000/037/344/original/21Run01.mp4',
                type: 'video/mp4'
            }],
            fill: true,
            isFav: this.state.isFav,
            mobilePlayControl: {
                name: 'mobilePlayControl',
                text: 'Add To do+',
                selected: false,
                className: ["rewind-play-forward"],
                style: { display: "flex", width: "15em", justifyContent: "center", alignItems: "center" }                
            },
            controlBar: {
                children: [
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    {
                        name: 'CustomControlSpacer',
                        text: 'CustomControlSpacer'
                    },
                    {
                        name: 'DynComp',
                        text: 'Completed',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: <Completed />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { alert("") }
                    },
                    'volumePanel',
                    {
                        name: 'DynComp',
                        text: 'Favourite',
                        selected: true,
                        className: ["vjs-control", "vjs-button"],
                        icon: this.state.isFav ? <Fav /> : <UnFav />,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { this.setState({ isFav: !this.state.isFav }) }
                    },
                    {
                        name: 'DynComp',
                        text: 'Add To do+',
                        selected: false,
                        className: ["vjs-control", "vjs-button"],
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "6em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: () => { alert("") }
                    },
                    'fullscreenToggle'
                ]
            }

        }

        console.log(videoJsOptions, this.state.isFav)

        return (
            <div style={{ width: "100%" }}>
                <VideoPlayer ref={(e) => this.player = e} {...videoJsOptions} />
                {/* <MobilePlayer ref={(e) => this.player = e} {...videoJsMobileOptions} /> */}
            </div>
        )
    }
}