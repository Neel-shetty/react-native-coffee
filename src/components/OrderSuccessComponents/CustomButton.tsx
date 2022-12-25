import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";

const CustomButton = () => {
  const navigation = useNavigation();
  function onPress() {
    navigation.navigate("Root");
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <Text style={styles.text}>Track My Order</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    height: 46.79,
    width: width * 0.85,
    alignItems: "center",
    backgroundColor: "#324A59",
    borderRadius: 30,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "poppins-semibold",
  },
});
