import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 2.4837em;
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
    viewBox="0 0 24.837 32.137"
    {...props}
  >
    <path
      className="a"
      d="M533.656,1265.466a14.278,14.278,0,0,0,10.165-4.2,1.05,1.05,0,0,0-.743-1.792,1.038,1.038,0,0,0-.742.307,12.273,12.273,0,1,1-8.686-20.942,12.357,12.357,0,0,1,5.594,1.342l1.683.86-5.261,1.581a1.051,1.051,0,0,0,.3,2.058,1.089,1.089,0,0,0,.307-.047l6.468-1.945.171.027a1.064,1.064,0,0,0,.168.013,1.033,1.033,0,0,0,1.039-1.1v-.077a1.088,1.088,0,0,0-.037-.36l-2.136-7.109a1.061,1.061,0,0,0-1.008-.748,1.033,1.033,0,0,0-.3.044,1.051,1.051,0,0,0-.7,1.307l1.221,4.062-1.525-.7a14.568,14.568,0,0,0-6-1.3,14.24,14.24,0,0,0-10.139,4.19,14.366,14.366,0,0,0,10.162,24.529Z"
      transform="translate(-519.292 -1233.329)"
    />
    <text className="b" transform="translate(6.965 21.665)">
      <tspan x="1" y="0">
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
