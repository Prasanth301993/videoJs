import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 2.8em;
  height: 2.5884em;
  .a {
    fill: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : props.filled
        ? "#fff"
        : "none"};
    stroke: #fff;
    stroke-width: 2px;
  }
`;

const icon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 25.884" {...props}>
    <path
      className="a"
      d="M19.052,20A6.942,6.942,0,0,0,13,23.541,6.942,6.942,0,0,0,6.948,20C3.111,20,0,23.559,0,27.4c0,9.638,13,16.362,13,16.362S26,37.034,26,27.4C26,23.559,22.889,20,19.052,20Z"
      transform="translate(1 -19)"
    />
  </Svg>
);

icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  filled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
};

icon.defaultProps = {
  className: "",
  size: "1rem",
  filled: false,
  onClick: () => null,
  backgroundColor: null
};

export default icon;
