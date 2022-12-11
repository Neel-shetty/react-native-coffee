import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import DetailHeader from "../../components/DetailScreenComponents/DetailHeader";
import CoffeeOptions from "../../components/DetailScreenComponents/CoffeeOptions";
import Checkout from "../../components/DetailScreenComponents/Checkout";
import { RootStackScreenProps } from "../../../types";
import { width } from "../../constants/Layout";

const DetailScreen = ({
  route,
}: RootStackScreenProps<"DetailScreen">["route"]) => {
  const uri = route.params.item.image;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.detailContainer}>
        <DetailHeader />
      </View>
      <View style={styles.imageContainer}>
        <Image source={uri} />
      </View>
      <View style={styles.optionContainer}>
        <CoffeeOptions />
      </View>
      <View style={styles.checkoutContainer}>
        <Checkout />
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  imageContainer: {
    height: 150,
    width: width * 0.9,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#F7F8FB",
    flex: 2,
  },
  detailContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  optionContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
