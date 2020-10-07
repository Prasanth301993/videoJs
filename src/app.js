import React from 'react';
import { Player, ControlBar, FullscreenToggle, BigPlayButton } from 'video-react';
import FavButton from './components/favButton';
import Todo from './components/todo';
import 'video-react/dist/video-react.css';
import Share from './components/share';
import Completed from './components/completed';
import ForwardReplayControl from "./components/forwardReverse";

export default class Video extends React.Component {
    componentDidMount() {
        let overlay_content = '<div class="myOverlay"><h2>Title of Video</h2></div>';
    }
    render() {
        return (
            <Player >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                <BigPlayButton position="center" />
                <ControlBar autoHide={true}>
                    <ForwardReplayControl order={3.1} mode={"backward"} />
                    <ForwardReplayControl order={3.2} mode={"forward"} />
                    <Share order={7} />
                    <Completed order={8} />
                    <FavButton order={9} />
                    <Todo order={10} />
                    <FullscreenToggle order={11} />
                </ControlBar>
            </Player>
        );
    }
}