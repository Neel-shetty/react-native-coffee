import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import Gift from "../svg/HomeScreenSvg/Gift";
import GiftGray from "../svg/HomeScreenSvg/GiftGray";
import Home from "../svg/HomeScreenSvg/Home";
import HomeGray from "../svg/HomeScreenSvg/HomeGray";
import List from "../svg/HomeScreenSvg/List";
import ListGray from "../svg/HomeScreenSvg/ListGray";

const TabBar = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <Home />
      <Gift />
      <List />
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    height: 64,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
  },
});
