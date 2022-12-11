import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import DetailHeader from "../../components/DetailScreenComponents/DetailHeader";
import CoffeeOptions from "../../components/DetailScreenComponents/CoffeeOptions";
import Checkout from "../../components/DetailScreenComponents/Checkout";
import { RootStackScreenProps } from "../../../types";
import { width } from "../../constants/Layout";

const DetailScreen = ({
  route,
}: RootStackScreenProps<"DetailScreen">['route']) => {
  const uri = route.params.item.image;
  return (
    <View style={styles.root}>
      <View>
        <DetailHeader />
      </View>
      <View style={styles.imageContainer}>
        <Image source={uri} />
      </View>
      <View>
        <CoffeeOptions />
      </View>
      <View>
        <Checkout />
      </View>
    </View>
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
  },
});
