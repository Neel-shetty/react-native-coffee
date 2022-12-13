import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartCard from "../../components/CartScreenComponets/CartCard";
import CartHeader from "../../components/CartScreenComponets/CartHeader";
import CartBottom from "../../components/CartScreenComponets/CartBottom";

const CartScreen = ({ route }: any) => {
  console.log(route.params.uri);
  return (
    <View style={styles.root}>
      <Text>CartScreen</Text>
      <CartHeader />
      <Text style={styles.header}>My Cart</Text>
      <CartCard uri={route.params.uri} />
      <CartCard uri={route.params.uri} />
      <CartBottom />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: "#001833",
    marginLeft: 20,
  },
  idk:{}
});
