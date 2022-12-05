import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const NextArrow = () => {
  return (
    <View style={styles.root}>
      <AntDesign name="arrowright" size={32} color="white" />
    </View>
  );
};

export default NextArrow;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#324A59",
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
