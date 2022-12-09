import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import CoffeeCup from "../../components/svg/HomeScreenSvg/CoffeeCup";
import CoffeeCupBW from "../../components/svg/HomeScreenSvg/CoffeeCupBW";

const LoyaltyCard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <View style={styles.left}>
          <Text style={styles.title}>Loyalty Card</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>4 / 8</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <CoffeeCup />
        <CoffeeCup />
        <CoffeeCup />
        <CoffeeCup />
        <CoffeeCupBW />
        <CoffeeCupBW />
        <CoffeeCupBW />
        <CoffeeCupBW />
      </View>
    </View>
  );
};

export default LoyaltyCard;

const styles = StyleSheet.create({
  root: {
    height: 122,
    width: width * 0.9,
    backgroundColor: "#324A59",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.8,
  },
  left: {},
  right: {},
  title: {
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: "#D8D8D8",
    paddingHorizontal: 5,
  },
  cardContainer: {
    height: 61,
    backgroundColor: "white",
    width: width * 0.8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
