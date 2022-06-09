import React from "react";
import Svg, { Path } from "react-native-svg"

export default function PeopleIcon() {
  return (
    <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M5.51 9.34a2.75 2.75 0 0 1 2.75-2.75h.48a2.75 2.75 0 0 1 2.75 2.75v2.69H5.51V9.34ZM6.05 3.1a2.45 2.45 0 1 1 4.9 0 2.45 2.45 0 0 1-4.9 0Z"
      stroke="#05B1A1"
      strokeWidth={0.5}
    />
    <Path
      d="M.748 10.071a2.4 2.4 0 1 1 4.802 0v1.96H.748v-1.96ZM1.19 4.77a1.96 1.96 0 1 1 3.918 0 1.96 1.96 0 0 1-3.918 0ZM11.45 10.071a2.4 2.4 0 1 1 4.802 0v1.96H11.45v-1.96ZM11.892 4.77a1.96 1.96 0 1 1 3.918 0 1.96 1.96 0 0 1-3.918 0ZM.65 14.71c0-.906.734-1.64 1.64-1.64h12.42a1.64 1.64 0 0 1 0 3.28H2.29a1.64 1.64 0 0 1-1.64-1.64Z"
      stroke="#05B1A1"
      strokeWidth={0.5}
    />
    <Path
      d="M.65 14.71c0-.906.734-1.64 1.64-1.64h8.66v3.28H2.29a1.64 1.64 0 0 1-1.64-1.64Z"
      fill="#05B1A1"
      stroke="#05B1A1"
      strokeWidth={0.5}
    />
  </Svg>
  );
}