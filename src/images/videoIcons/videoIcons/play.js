import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 4em;
  height: 4.9em;
  .a {
    fill: #fff;
  }
`;

const icon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 49" {...props}>
    <path
      className="a"
      d="M19.383,8.354a6,6,0,0,1,10.233,0L43.406,30.866A6,6,0,0,1,38.289,40H10.711a6,6,0,0,1-5.117-9.134Z"
      transform="translate(40) rotate(90)"
    />
  </Svg>
);

icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};

icon.defaultProps = {
  className: "",
  size: "1rem",
  onClick: () => null
};

export default icon;
