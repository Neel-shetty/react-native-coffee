import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartCard from "../../components/CartScreenComponets/CartCard";

const CartScreen = ({route}:any) => {
  console.log(route)
  return (
    <View>
      <Text>CartScreen</Text>
      <CartCard />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
