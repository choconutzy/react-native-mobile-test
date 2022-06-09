import React from "react";
import Svg, { Path, Rect } from "react-native-svg"

export default function Like() {
  return (
  <Svg
    width={25}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.034 1c5.799 0 10.5 4.701 10.5 10.5S17.833 22 12.034 22s-10.5-4.701-10.5-10.5S6.235 1 12.034 1Zm4.71 13.186a4.711 4.711 0 0 1-9.42 0h9.42Z"
      fill="#05B1A1"
      stroke="#05B1A1"
      strokeWidth={0.7}
    />
    <Path
      d="m7.462 7.853 2.793 2.1-2.874 1.17M17.011 7.853l-2.793 2.1 2.875 1.17"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
}