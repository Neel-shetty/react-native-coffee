import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const Checkout = () => {
  return (
    <View style={styles.root}>
      <Text>Checkout</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Checkout</Text>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    height: 46,
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#324A59",
    borderRadius: 30,
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
    color: "white",
  },
});
