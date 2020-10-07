import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import play from '../images/play.svg';
import pause from '../images/pause.svg';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class PlayToggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, player } = this.props;
    if (player.paused) {
      actions.play();
    } else {
      actions.pause();
    }
  }

  render() {
    const { player, className } = this.props;
    const controlText = player.paused ? 'Play' : 'Pause';

    return (
      <button
        ref={(c) => {
          this.button = c;
        }}
        className={classNames(className, {         
          'video-react-control': true,
          'video-react-button': true          
        })}
        style={{
            backgroundImage:
              `url(${player.paused ? play : pause})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'          
          }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-control-text">{controlText}</span>
      </button>
    );
  }
}

PlayToggle.propTypes = propTypes;
PlayToggle.displayName = 'PlayToggle';