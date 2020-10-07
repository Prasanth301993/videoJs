import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';



const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class CustomSpacer extends Component {
  constructor(props, context) {
    super(props, context);
    
  }

  

  render() {
    const { player, className } = this.props;
    const { currentSrc } = player;

    return (
      <div
        ref={c => {
          this.button = c;
        }} 
        className={classNames(className, {
          'video-react-control': true,
          'video-react-progress-control': true
        })}
      >
        
      </div>
    );
  }
}

CustomSpacer.propTypes = propTypes;