import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { width } from "../../constants/Layout";

const Map = () => {
  return (
    <View style={styles.root}>
      <MapView style={styles.map} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    height: 500,
    width: width,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
