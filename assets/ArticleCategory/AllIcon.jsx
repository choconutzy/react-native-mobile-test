import React from "react";
import Svg, { Path } from "react-native-svg"
import {View, StyleSheet} from "react-native"

export default function AllIcon() {
  return (
    <View style={styles.container}>
        <Svg
        width={20}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 1h15M1 4.333h15M1 7.667h15M1 11h15"
          stroke="#fff"
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