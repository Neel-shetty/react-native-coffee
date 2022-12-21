import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartCard from "../../components/CartScreenComponets/CartCard";
import CartHeader from "../../components/CartScreenComponets/CartHeader";
import CartBottom from "../../components/CartScreenComponets/CartBottom";
import ConfirmOrder from "../../components/CartScreenComponets/ConfirmOrder";

const CartScreen = ({ route }: any) => {
  console.log(route.params);
  return (
    <View style={styles.root}>
      <View style={styles.confirmContainer}>
        <ConfirmOrder/>
      </View>
      <View style={styles.headerContainer}>
        <CartHeader />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.header}>My Cart</Text>
      </View>
      <View style={styles.cardContainer}>
        <CartCard info={route.params} />
      </View>
      <View style={styles.bottomContainer}>
        <CartBottom />
      </View>
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
  idk: {},
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    // alignItems:'center',
    justifyContent: "center",
  },
  cardContainer: {
    flex: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomContainer: {
    flex: 1,
  },
  confirmContainer:{
    position:'absolute',
    bottom:0
      }
});
