import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const CartCard = () => {
  
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={uri} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>CartCard</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>cost</Text>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  root: {
    height: 96,
    borderRadius: 15,
    width: width * 0.9,
    backgroundColor: "#F7F8FB",
    alignSelf: "center",
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  imageContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 2,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "#001833",
  },
  costContainer: {
    flex: 1,
  },
  cost: {},
});
