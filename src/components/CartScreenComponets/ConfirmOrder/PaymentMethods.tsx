import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../../constants/Layout";

const PaymentMethods = () => {
  return (
    <View style={styles.root}>
      <View style={styles.radioContainer}>
        <Text>Radio</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Online Banking</Text>
        <Text style={styles.subtitle}>MyBank2U(one-time)</Text>
      </View>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.9,
    height: 81,
    backgroundColor: "#F7F8FB",
    borderRadius: 12,
    flexDirection: "row",
  },
  radioContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {},
  title: {
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: "#172B4D",
  },
  subtitle: {
    fontFamily: "poppins-medium",
    fontSize: 10,
    color: "#001833", //to-do opacity 22%
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
