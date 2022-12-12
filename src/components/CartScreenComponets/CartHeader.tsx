import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import BackArrow from "../BackArrow";
import Cart from "../svg/HomeScreenSvg/Cart";

const CartHeader = () => {
  return (
    <View style={styles.root}>
      <BackArrow />
      {/* <Text style={styles.title}>DetailHeader</Text> */}
      {/* <Cart /> */}
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  root: {
    height: 24,
    width: width * 0.9,
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#001833",
  },
});
