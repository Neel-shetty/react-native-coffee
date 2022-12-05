import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../components/BackArrow";
import CustomTextInput from "../../components/CustomTextInput";
import Colors from "../../constants/Colors";

const SignInScreen = () => {
  return (
    <View>
      <View>
        <BackArrow />
      </View>
      <View>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
      </View>
      <View>
        <CustomTextInput />
        <CustomTextInput />
      </View>
      <View>
        <Text style={styles.link}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-medium",
    fontSize: 22,
    color: Colors.primary300,
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.gray,
  },
  link: {
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: Colors.primary100,
  },
});
