import PropTypes from 'prop-types';
import React, { Component } from 'react';
import forward from '../images/forward.svg'
import backward from '../images/backward.svg'
import {ReactComponent as Forward} from '../images/forward.svg';
import {ReactComponent as Reverse} from '../images/backward.svg';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object 
};

const defaultProps = {
  seconds: 10
};

export default class ForwardReplayControl extends Component {
    constructor(props, context) {
      super(props, context);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { actions, seconds,mode } = this.props;
      // Depends mode to implement different actions
      if (mode === 'forward') {
        actions.forward(seconds);
      } else {
        actions.replay(seconds);
      }
    }

    render() {
    
      const { seconds, className,mode } = this.props;
     
      
      return (
        <button
        ref={c => {
          this.button = c;
        }}
        className={classNames(className, {
          'video-react-control': true,
          'video-react-button': true
        })}        
        onClick={this.handleClick}
      >
         {(mode === 'forward')? <Forward width="15"/>:<Reverse width="15"/>}
        </button>
      );
    }
  }

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  
