import React from "react";
import { StyleSheet, View } from "react-native";
import BottomInfo from "./BottomInfo";
import MidInfo from "./MidInfo";
import TopLogo from "./TopLogo";

export default function Home() {
  return (
    <View style={styles.border}>
      <TopLogo />
      <MidInfo />
      <BottomInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: "100%",
    backgroundColor: "black",
    padding: 2,
  },
});
