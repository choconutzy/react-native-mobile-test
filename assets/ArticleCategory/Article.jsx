import React from "react";
import Svg, { Path, Rect } from "react-native-svg"

export default function ArticleIcon() {
  return (
    <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      x={0.9}
      y={0.9}
      width={15.2}
      height={15.2}
      rx={2.5}
      stroke="#05B1A1"
    />
    <Path
      d="M2.892 5.073h11.216M2.892 8.5h11.216M2.892 12.239h7.477"
      stroke="#05B1A1"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
  );
}