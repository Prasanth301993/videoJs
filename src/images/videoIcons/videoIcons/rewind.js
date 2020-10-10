import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 2.4836em;
  height: 3.2137em;
  .a,
  .b {
    fill: #fff;
  }
  .b {
    font-size: 1.1em;
    font-family: Roboto-Bold, Roboto;
    font-weight: 700;
    letter-spacing: 0.025em;
  }
`;

const icon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24.836 32.137"
    {...props}
  >
    <path
      className="a"
      d="M198.548,1265.466a14.278,14.278,0,0,1-10.164-4.2,1.05,1.05,0,0,1,1.486-1.485,12.273,12.273,0,1,0,8.686-20.942,12.35,12.35,0,0,0-5.593,1.342l-1.684.86,5.26,1.581a1.051,1.051,0,0,1-.3,2.058,1.083,1.083,0,0,1-.307-.047l-6.469-1.945-.17.027a1.076,1.076,0,0,1-.168.013,1.032,1.032,0,0,1-1.038-1.1v-.077a1.046,1.046,0,0,1,.037-.36l2.136-7.109a1.06,1.06,0,0,1,1.007-.748,1.032,1.032,0,0,1,.3.044,1.051,1.051,0,0,1,.7,1.307l-1.222,4.062,1.526-.7a14.56,14.56,0,0,1,6-1.3,14.241,14.241,0,0,1,10.14,4.19,14.366,14.366,0,0,1-10.163,24.529Z"
      transform="translate(-188.078 -1233.329)"
    />
    <text className="b" transform="translate(3.569 21.665)">
      <tspan x="-1" y="0">
        15
      </tspan>
    </text>
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
