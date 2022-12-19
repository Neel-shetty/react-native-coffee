import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";

const CartBottom = () => {
  const navigation = useNavigation()
  function checkoutButton(){
    navigation.navigate('ConfirmOrderScreen')
  }
  return (
    <View style={styles.root}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.price}>$9.00</Text>
      </View>
      <TouchableOpacity onPress={checkoutButton}>
        <View style={styles.checkoutButton}>
          <Text style={styles.text}>Checkout</Text>
        </View>
      </TouchableOpacity>
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
  checkoutButton: {
    height: 52,
    width: 162,
    borderRadius: 60,
    backgroundColor: "#324A59",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
    color: "white",
  },
  price: {
    fontFamily: "poppins-semibold",
    fontSize: 22,
    color: "#001833",
  },
});
