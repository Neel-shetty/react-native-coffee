import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { paddingH, width } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/svg/OnBoaringSvg/Profile";
import Lock from "../components/svg/OnBoaringSvg/Lock";
import Message from "../components/svg/OnBoaringSvg/Message";

interface inputTypes {
  placeholder: string;
  icon: string;
}

const CustomTextInput = ({ placeholder, icon }: inputTypes) => {
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        {icon === "mail" ? <Message /> : null}
        {icon === "password" ? <Lock /> : null}
      </View>
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
    width: width * paddingH,
    alignSelf: "center",
    height: 29,
    // backgroundColor: "pink",
    margin: 10,
    flexDirection: "row",
    marginVertical: 12,
  },
  input: {
    // backgroundColor: "violet",
    width: width * 0.7,
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
  iconContainer: {
    paddingHorizontal: 5,
  },
});
