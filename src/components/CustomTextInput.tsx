import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { width } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";

interface inputTypes {
  placeholder: string;
  icon: string;
}

const CustomTextInput = ({ placeholder, icon }: inputTypes) => {
  return (
    <View style={styles.root}>
      {icon === "mail" ? (
        <Ionicons
          name="mail-outline"
          size={24}
          style={styles.icon}
          color="#001833"
        />
      ) : null}
      {icon === "password" ? (
        <Ionicons
          name="lock-closed-outline"
          style={styles.icon}
          color="#001833"
          size={24}
        />
      ) : null}
      <View style={styles.inputContainer}>
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={"#C1C7D0"}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderColor: "#C1C7D0",
    width: width * 0.9,
    alignSelf: "center",
    height: 29,
    // backgroundColor: "pink",
    margin: 10,
    flexDirection: "row",
  },
  input: {
    // backgroundColor: "violet",
    width: width * 0.8,
    fontFamily: "poppins-regular",
  },
  inputContainer: {
    paddingLeft: 5,
    // borderLeftWidth: 1,
    // borderColor: "#C1C7D0",
    paddingBottom: 2,
    flexDirection: "row",
  },
  icon: {
    paddingRight: 0,
  },
  divider: {
    borderLeftWidth: 1,
    height: 25,
    width: 5,
    borderColor: "#C1C7D0",
  },
});
