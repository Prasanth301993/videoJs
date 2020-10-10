import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  font-size: ${props => props.size};
  width: 1.4em;
  height: 1.4em;
  .a {
    fill: ${props => props.color};
  }
`;

const Share = ({ color = "#fff", ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.545 19.14"
      color={color}
      {...props}
    >
      <path
        className="a"
        d="M35.355,12.76a3.181,3.181,0,0,0-2.343,1.028L27.242,10.5a3.189,3.189,0,0,0,0-1.858l5.77-3.289a3.186,3.186,0,1,0-.755-1.406L26.408,7.28a3.19,3.19,0,1,0,0,4.579l5.848,3.334a3.19,3.19,0,1,0,3.1-2.434Z"
        transform="translate(-21)"
      />
    </Svg>
  );
};

export default Share;
