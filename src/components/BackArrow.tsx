import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BackArrow = () => {
  return (
    <View>
      <AntDesign name="arrowleft" size={24} color="black" />
    </View>
  );
};

export default BackArrow;

const styles = StyleSheet.create({});
