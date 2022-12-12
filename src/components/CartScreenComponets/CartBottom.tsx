import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const CartBottom = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text>$9.00</Text>
      </View>
      <View>
        <Text>Checkout</Text>
      </View>
    </View>
  );
};

export default CartBottom;

const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
