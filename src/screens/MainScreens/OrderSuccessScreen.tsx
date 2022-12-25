import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/OrderSuccessComponents/CustomButton";
import { width } from "../../constants/Layout";
import TakeOut from "../../components/svg/ConfirmOrderSvg/TakeOut";

const OrderSuccessScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <TakeOut />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Order Success</Text>
        <Text style={styles.subtitle}>
          Your order has been successfully placed. For more details got to my
          orders
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          width: width,
          justifyContent: "flex-start",
        }}
      >
        <CustomButton />
      </View>
    </View>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    width: width,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.85,
    flex: 1,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 22,
    color: "#181D2D",
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "#AAAAAA",
    textAlign: "center",
  },
});
