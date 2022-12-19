import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const CartBottom = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text>$9.00</Text>
      </View>
      <View style={styles.checkoutButton}>
        <Text style={styles.text}>Checkout</Text>
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
  checkoutButton:{
    height:52,
    width:162,
    borderRadius:60,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent: 'center',
      },
  text:{
    fontFamily:'poppins-semibold',
    fontSize:14,
    color:'white'
      },
  price:{

    fontFamily:'poppins-semibold',
    fontSize:14,
    color:'white'
      }
});
