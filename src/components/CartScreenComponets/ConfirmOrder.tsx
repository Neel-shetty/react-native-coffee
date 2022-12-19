import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "../../constants/Layout";
import Title from "./ConfirmOrder/Title";
import Address from "./ConfirmOrder/Address";
import PaymentMethods from "./ConfirmOrder/PaymentMethods";
import PriceDetails from "./ConfirmOrder/PriceDetails";
import PayNow from "./ConfirmOrder/PayNow";

const ConfirmOrder = () => {
  return (
    <View style={styles.root}>
      <View><Title/></View>
      <View><Address/></View>
      <View><PaymentMethods/></View>
      <View><PriceDetails/></View>
      <View><PayNow/></View>
    </View>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  root: {
    height: height - height * 0.4,
    width: width,
    backgroundColor: "pink",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
