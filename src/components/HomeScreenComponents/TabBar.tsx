import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const TabBar = () => {
  return (
    <View style={styles.root}>
      <Text>TabBar</Text>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
});
