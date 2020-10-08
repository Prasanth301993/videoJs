import React from 'react';
import VideoPlayer from './VideoPlayer'
import 'video.js/dist/video-js.css'

export default class VideoApp extends React.Component {

    state = {
        isFav: this.props.isFav || false
    }

    checkFav = () => {
        this.setState({
            "isFav": !this.state.isFav
        }, () => {
            console.log(this.state)
        })
    }

    render() {


        const videoJsOptions = {
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
            controlBar: {
                children: [
                    'playToggle',
                    'volumePanel',
                    'currentTimeDisplay',
                    'timeDivider',
                    'durationDisplay',
                    'progressControl',
                    {
                        name: 'toDo',
                        text: '+To Do',
                        isFav: this.state.isFav,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", margin: "0 1 em" },
                        callback: this.checkFav
                    },
                    {
                        name: 'Favorite',
                        text: '+To Do',
                        isFav: this.state.isFav,
                        style: { lineHeight: "3em", height: "100%", cursor: "pointer", width: "4em", display: "flex", justifyContent: "center", alignItems: "center" },
                        callback: this.checkFav
                    },
                    'fullscreenToggle'
                ]
            },
        }

        console.log(videoJsOptions)

        return (
            <div style={{ width: "100%" }}>
                <VideoPlayer {...videoJsOptions} onFavSelect={(option) => {
                    this.setState({ isFav: !option })
                }} />
            </div>
        )
    }
}