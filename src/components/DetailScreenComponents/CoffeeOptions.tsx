import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";

const CoffeeOptions = () => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <Text style={styles.title}>Americano</Text>
      </View>
      {/* <View style={styles.item}>
        <Text style={styles.title}>Shot</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Select</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Size</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Ice</Text>
      </View> */}
    </View>
  );
};

export default CoffeeOptions;

const styles = StyleSheet.create({
  root: {

  },
  item: {
    height: 64,
    justifyContent: "center",
    width: width * 0.9,
    alignSelf: "center",
  },
  title: {
    fontFamily: "dmsans-medium",
    fontSize: 14,
    color: "#001833",
    borderTopWidth: 1,
    borderColor: "#F4F5F7",
  },
});
