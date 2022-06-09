import React from "react";
import Svg, { Path } from "react-native-svg"
import {View, StyleSheet} from "react-native"

export default function People({color, size}) {
  return (
    <View style={{paddingTop:"10%"}}>
      <Svg
      width={20}
      height={17}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.437.43c1.443 0 2.663.95 3.07 2.259-.423.187-.805.45-1.128.772a3.691 3.691 0 0 0-1.026 3.27 3.217 3.217 0 1 1-.916-6.3Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.754c1.358.236 2.717.378 4.075.433v-.889c0-1.178.482-2.25 1.258-3.025A4.282 4.282 0 0 1 7.797 9.05 3.688 3.688 0 0 1 6.43 7.068H3.801A3.812 3.812 0 0 0 0 10.868v2.886Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.557 16.184c3.625.627 7.25.6 10.874 0v-2.886c0-2.09-1.71-3.801-3.801-3.801H8.358a3.812 3.812 0 0 0-3.8 3.801v2.886Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13.754a31.275 31.275 0 0 1-4.075.433v-.889c0-1.178-.482-2.25-1.258-3.025a4.282 4.282 0 0 0-2.464-1.222 3.688 3.688 0 0 0 1.367-1.983h2.629c2.09 0 3.801 1.71 3.801 3.8v2.886Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.563.43c-1.443 0-2.663.95-3.07 2.259a3.691 3.691 0 0 1 2.154 4.042 3.217 3.217 0 1 0 .916-6.3Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.994 2.86a3.217 3.217 0 1 1 0 6.434 3.217 3.217 0 0 1 0-6.434ZM4.557 16.184c3.625.627 7.25.6 10.874 0v-2.886c0-2.09-1.71-3.801-3.801-3.801H8.358a3.812 3.812 0 0 0-3.8 3.801v2.886Z"
        fill={color}
      />
      </Svg>
    </View>
  );
}