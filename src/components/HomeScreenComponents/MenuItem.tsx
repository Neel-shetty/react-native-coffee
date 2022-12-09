import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItem = () => {
  return (
    <View style={styles.root}>
      <Image source={require("../../../assets/images/Home/coffee1.png")} />
      <Text style={styles.title}>Americano</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  root: {
    height: 164,
    width: 154,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 14,
  },
});
