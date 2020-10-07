import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import image from '../images/fav.svg'



const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class FavButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { player, className } = this.props;
    const { currentSrc } = player;

    return (
      <a
        ref={c => {
          this.button = c;
        }}
        className={classNames(className, {
          'video-react-control': true,
          'video-react-button': true
        })}
        href={currentSrc}
        fav
        style={{
          backgroundImage:
            `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        tabIndex="0"
        onClick={this.handleClick}
      />
    );
  }
}

FavButton.propTypes = propTypes;