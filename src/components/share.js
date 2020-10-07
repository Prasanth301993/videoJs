import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import image from '../images/share.svg'



const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class Share extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { 
    alert("share")
  }

  render() {
    const { player, className } = this.props;
    const { currentSrc } = player;

    return (
      <button
        ref={c => {
          this.button = c;
        }}
        className={classNames(className, {
          'video-react-control': true,
          'video-react-button': true
        })}
        style={{
          backgroundImage:
            `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'          
        }}
        onClick={this.handleClick}
      >
        
      </button>
    );
  }
}

Share.propTypes = propTypes;