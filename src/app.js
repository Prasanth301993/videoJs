import React from 'react';
import { Player,ControlBar } from 'video-react';
import FavButton from './components/favButton';
import 'video-react/dist/video-react.css';
 
export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      <ControlBar autoHide={false}>
        <FavButton order={7} />
      </ControlBar>
    </Player>
  );
};