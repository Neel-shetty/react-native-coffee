import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DetailHeader from "../../components/DetailScreenComponents/DetailHeader";
import { Image } from "react-native-svg";
import CoffeeOptions from "../../components/DetailScreenComponents/CoffeeOptions";
import Checkout from "../../components/DetailScreenComponents/Checkout";

const DetailScreen = () => {
  return (
    <View>
      <View>
        <DetailHeader />
      </View>
      <View>
        <Image />
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

const styles = StyleSheet.create({});
