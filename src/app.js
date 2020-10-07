import React from 'react';
import { Player, ControlBar, FullscreenToggle } from 'video-react';
import FavButton from './components/favButton';
import Todo from './components/todo';
import 'video-react/dist/video-react.css';
import Share from './components/share';
import Completed from './components/completed';

export default props => {
    return (
        <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            <ControlBar autoHide={false}>
                <Share order={7} />
                <Completed order={8} />
                <FavButton order={9} />
                <Todo order={10} />
                <FullscreenToggle order={11} />
            </ControlBar>
        </Player>
    );
};