import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CoffeeMachine from "../../components/svg/OnBoaringSvg/CoffeeMachine";

const OnBoardingScreen1 = () => {
  return (
    <View style={styles.root}>
      <View>
        <CoffeeMachine />
      </View>
    </View>
  );
};

export default OnBoardingScreen1;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
