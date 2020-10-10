import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 1.4em;
  height: 1.4em;
  .a{fill:#2dce8c;}
  .b{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}
`;

const Tick = (props) => {
  return(
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.14 19.135" {...props}>
      <ellipse className="a" cx="9.57" cy="9.568" rx="9.57" ry="9.568"/>
      <path className="b" d="M1025.865,753.525l2.677,2.346,5.433-6.492" transform="translate(-1020.351 -743.058)"/>
    </Svg>
  )
}

export default Tick;