import React from "react";
import Svg, { Path } from "react-native-svg"
import {View, StyleSheet} from "react-native"

export default function Insight() {
  return (
    <View>
      <Svg
        width={19}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.923 19.57v1.823h-8.58V19.57h8.58ZM9.631 1a8.632 8.632 0 0 1 4.29 16.123v.923h-8.58v-.923A8.632 8.632 0 0 1 9.632 1Z"
          fill="#05B1A1"
          stroke="#05B1A1"
          strokeWidth={0.7}
        />
        <Path
          d="M8.718 17.867v-6.422L6.31 9.037M10.724 17.867v-6.422l2.408-2.408"
          stroke="#fff"
          strokeWidth={0.7}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingLeft:1,
    paddingTop:3,
  }
})