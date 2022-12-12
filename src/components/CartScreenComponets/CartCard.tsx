import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const CartCard = ({ uri }: any) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={uri} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Americano</Text>
        <Text style={styles.subtitle}>single | iced | medium | full ice</Text>
        <Text>x1</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>$3.00</Text>
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
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "#001833",
  },
  costContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cost: {
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "poppins-light",
    fontSize: 10,
    color: "#757575",
  },
});
