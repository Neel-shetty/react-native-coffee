import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const Checkout = () => {
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.amounttxt}>Total Amount</Text>
        <Text style={styles.amountnum}>$15</Text>
      </View>
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.85,
    marginBottom: 10,
  },
  amounttxt: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#001833",
    fontWeight: "500",
  },
  amountnum: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
    color: "#001833",
  },
});
