import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import image from '../images/fav.svg'



const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("todo")
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
          width: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
        }
        onClick={this.handleClick}
      >
        + Add To Do
      </button >
    );
  }
}

Todo.propTypes = propTypes;