import React from "react";
import Svg, { Path } from "react-native-svg"

export default function IdeaIcon() {
  return (
    <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m13.444 4.692 1.507-1.549M3.35 15.157l1.135-1.177-1.135 1.177ZM8.861 2.875 8.82.625M4.485 4.692 3 3.143m11.6 12.014-1.155-1.177 1.156 1.177ZM15.425 9.336h1.879m-16.679 0h1.878H.625Z"
      stroke="#05B1A1"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M11.039 14.001v3.076H7.117V14C5.3 13.237 4 11.441 4 9.336a5.074 5.074 0 0 1 5.078-5.078 5.074 5.074 0 0 1 5.078 5.078 5.042 5.042 0 0 1-3.117 4.665Z"
      stroke="#05B1A1"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M11.297 15.25H7.375" stroke="#05B1A1" strokeWidth={0.8} />
  </Svg>
  );
}