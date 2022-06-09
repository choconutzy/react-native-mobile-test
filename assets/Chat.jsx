import React from "react";
import Svg, { Path } from "react-native-svg"
import {View, StyleSheet} from "react-native"

export default function Chat({color, size}) {
  return (
    <View style={{paddingTop:"10%"}}>
      <Svg
      width={20}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.178 2.315C8.888-1.435 2.236.687.76 6.248.14 8.582.737 9.666.737 11.418c0 1.8-.737 4.408-.737 4.408 0 .32.283.63.632.54 1.247-.326 3.23-.971 5.603-.327C14.212 18.2 19.33 7.692 13.178 2.315Zm6.27 18.115a.65.65 0 0 1-.16-.02c-6.307-1.584-5.884.195-9.388-.742a7.86 7.86 0 0 1-2.858-1.456c6.364.78 11.669-4.765 10.73-11.294.96 1 1.666 2.238 1.964 3.625.849 3.936-1.306 3.27.248 9.252.091.35-.219.635-.537.635Z"
        fill={color}
      />
      </Svg>
    </View>
  );
}