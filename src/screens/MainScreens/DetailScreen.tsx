import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import DetailHeader from "../../components/DetailScreenComponents/DetailHeader";
import CoffeeOptions from "../../components/DetailScreenComponents/CoffeeOptions";
import Checkout from "../../components/DetailScreenComponents/Checkout";
import { RootStackScreenProps } from "../../../types";

const DetailScreen = ({ route }: RootStackScreenProps<"DetailScreen">) => {
  const uri = route.params.item.image;
  console.log(uri);
  return (
    <View style={styles.root}>
      <View>
        <DetailHeader />
      </View>
      <View>
        <Image source={uri} style={{ width: 400, height: 200 }} />
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
    backgroundColor: "white",
    flex: 1,
  },
});
