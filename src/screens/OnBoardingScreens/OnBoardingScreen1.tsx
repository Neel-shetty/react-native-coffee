import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CoffeeMachine from "../../components/svg/OnBoaringSvg/CoffeeMachine";
import NextArrow from "../../components/NextArrow";
import { Props } from "../../../types";
import { StatusBar } from "expo-status-bar";

const OnBoardingScreen1 = ({ navigation }: Props) => {
  function NextButton() {
    navigation.navigate("SignInScreen");
  }
  return (
    <View style={styles.root}>
      <StatusBar style="dark"/>
      <View style={styles.svgContainer}>
        <CoffeeMachine />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Making your days with our coffee.</Text>
        <Text style={styles.subtitle}>
          The best grain, the finest roast, the most powerful flavour
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={NextButton}>
            <NextArrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen1;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  svgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
    // backgroundColor: "pink",
    width: width,
  },
  titleContainer: {
    width: width * 0.8,
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontFamily: "poppins-semibold",
    textAlign: "center",
    color: "#181D2D",
    padding: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    textAlign: "center",
    color: "#AAAAAA",
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // backgroundColor: "pink",
    flex: 1,
    marginBottom: 40,
  },
});
