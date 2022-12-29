import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../../components/TrackOrderComponents/Map";
import MapView from "react-native-maps";
import { width } from "../../constants/Layout";

const TrackOrderScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.overlay}>
        <Text style={styles.text}>test</Text>
        <Text>uggghh</Text>
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      {/* <MapView style={styles.map} /> */}
    </View>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    height: 400,
    width: width,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
