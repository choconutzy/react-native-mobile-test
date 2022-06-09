import React from "react";
import Svg, { Path } from "react-native-svg"

export default function PollingIcon() {
  return (
    <Svg
    width={17}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M.8 3.755a.6.6 0 0 1 .6-.6h1.927a.6.6 0 0 1 .6.6v10.381H.8V3.755ZM4.727 1.3a.6.6 0 0 1 .6-.6h2.418a.6.6 0 0 1 .6.6v12.836H4.727V1.3ZM9.145 5.227a.6.6 0 0 1 .6-.6h1.928a.6.6 0 0 1 .6.6v8.91H9.145v-8.91ZM13.073 10.627a.6.6 0 0 1 .6-.6H15.6a.6.6 0 0 1 .6.6v3.51h-3.127v-3.51Z"
      stroke="#05B1A1"
      strokeWidth={0.8}
    />
  </Svg>
  );
}