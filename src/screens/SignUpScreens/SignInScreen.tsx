import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BackArrow from "../../components/BackArrow";
import CustomTextInput from "../../components/CustomTextInput";
import Colors from "../../constants/Colors";
import NextArrow from "../../components/NextArrow";

const SignInScreen = () => {
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <BackArrow />
      </View>
      <View style={styles.top}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput placeholder={"Email"} icon={"mail"} />
        <CustomTextInput placeholder={"Password"} icon={"password"}/>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Forgot Password?</Text>
      </View>
      <View style={styles.arrowContainer}>
        <NextArrow />
      </View>
      <View style={styles.subtitleContainer}>
        <Text>New member?</Text>
        <Text>Sign up</Text>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
  header: {
    flex: 1,
  },
  top: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  linkContainer: {
    flex: 1,
  },
  arrowContainer: {
    flex: 1,
  },
  subtitleContainer: {
    flex: 1,
  },
});
