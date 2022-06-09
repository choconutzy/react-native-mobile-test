import React from "react";
import Svg, { Path } from "react-native-svg"

export default function Views() {
  return (
    <Svg
    width={23}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1 8.14S4.818 1 11.5 1 22 8.14 22 8.14s-3.818 7.14-10.5 7.14S1 8.14 1 8.14Z"
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 11.2c1.74 0 3.15-1.37 3.15-3.06s-1.41-3.06-3.15-3.06-3.15 1.37-3.15 3.06 1.41 3.06 3.15 3.06Z"
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
}