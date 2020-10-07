import React from 'react';
import { Player, ControlBar, FullscreenToggle, BigPlayButton, PlayToggle,CurrentTimeDisplay,TimeDivider,DurationDisplay,VolumeMenuButton } from 'video-react';
import FavButton from './components/favButton';
import Todo from './components/todo';
import 'video-react/dist/video-react.css';
import Share from './components/share';
import Completed from './components/completed';
import ForwardReplayControl from "./components/forwardReverse";
import ProgressControl from './components/progressBar';
import './app.css'
import CustomSpacer from './components/customSpacer';

export default class Video extends React.Component {
    componentDidMount() {
        let overlay_content = '<div class="myOverlay"><h2>Title of Video</h2></div>';
    }
    render() {
        return (
            <Player >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                <BigPlayButton position="center" />
                <ControlBar autoHide={false} disableDefaultControls >
                    <PlayToggle order={1} />
                    <ForwardReplayControl order={3.1} mode={"backward"} />
                    <ForwardReplayControl order={3.2} mode={"forward"} />
                    <VolumeMenuButton key="volume-menu-button" order={4} />
                    <CurrentTimeDisplay key="current-time-display" order={5.1} />
                    <TimeDivider key="time-divider" order={5.2} />
                    <DurationDisplay key="duration-display" order={5.3} />
                    <CustomSpacer order={6} />
                    <Share order={7} />
                    <Completed order={8} />
                    <FavButton order={9} />
                    <Todo order={10} />
                    <FullscreenToggle order={11} />
                </ControlBar>
                <ProgressControl />
            </Player>
        );
    }
}
