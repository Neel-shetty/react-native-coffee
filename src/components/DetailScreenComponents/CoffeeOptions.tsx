import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

const CoffeeOptions = () => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <Text style={styles.title}>Americano</Text>
        <View style={styles.toggle}>
          {/* <Ionicons name="add" size={20} /> */}
          <Text style={styles.title}> - </Text>
          <Text style={styles.title}> 1 </Text>
          <Text style={styles.title}> + </Text>
          {/* <Ionicons name="" /> */}
        </View>
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
  root: {},
  item: {
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
  title: {
    fontFamily: "dmsans-medium",
    fontSize: 14,
    color: "#001833",
    borderColor: "#F4F5F7",
  },
  toggle: {
    height: 30,
    width: 75,
    borderRadius: 50,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
