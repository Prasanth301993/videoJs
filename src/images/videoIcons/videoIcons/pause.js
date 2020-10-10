import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 1.2168em;
  height: 1.982em;
  .a {
    fill: #fff;
  }
`;

const icon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.168 19.82" {...props}>
    <rect className="a" width="4.257" height="19.82" rx="2.128" />
    <rect
      className="a"
      width="4.256"
      height="19.82"
      rx="2.128"
      transform="translate(7.912)"
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
