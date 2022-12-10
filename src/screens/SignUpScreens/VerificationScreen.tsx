import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackArrow from "../../components/BackArrow";
import CustomTextInput from "../../components/CustomTextInput";
import Colors from "../../constants/Colors";
import NextArrow from "../../components/NextArrow";
import { paddingH, width } from "../../constants/Layout";
import { RootStackScreenProps } from "../../../types";

const VerificationScreen = ({
  navigation,
}: RootStackScreenProps<"VerificationScreen">) => {
  function NextButton() {
    navigation.navigate("Root");
  }
  function ForgotButton() {}
  function SignUpButton() {
    navigation.navigate("SignUpScreen");
  }
  function BackButton() {
    navigation.goBack();
  }
  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    //   behavior="padding"
    //   enabled
    //   keyboardVerticalOffset={100}
    // >
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={undefined}
      // behavior={'height'}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
    >
      <SafeAreaView style={styles.root}>
        <ScrollView
          contentContainerStyle={styles.root}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={BackButton}>
              <BackArrow />
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>Enter the OTP we sent you</Text>
          </View>
          <View style={styles.inputContainer}></View>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={ForgotButton}>
              <Text style={styles.subtitle}>Resend in 00.30</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={NextButton}>
              <NextArrow />
            </TouchableOpacity>
          </View>
          <View style={styles.subtitleContainer}></View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;
// const paddingH = 0.8

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 22,
    color: Colors.primary300,
    paddingVertical: 10,
    width: width * paddingH,
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.gray,
    width: width * paddingH,
    // backgroundColor:'pink'
  },
  subtitle2: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.gray,
    // paddingLeft: 20,
    // width: width * 0.9,
    // backgroundColor:'pink'
  },
  link: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
    color: Colors.primary100,
    textDecorationLine: "underline",
    paddingVertical: 10,
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    width: width * paddingH,
    // backgroundColor: "red",
    alignSelf: "center",
    paddingVertical: 10,
  },
  top: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 2,
    // backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "center",
  },
  linkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
  },
  arrowContainer: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: width * paddingH,
    alignSelf: "center",
  },
  subtitleContainer: {
    flex: 2,
    flexDirection: "row",
    width: width * paddingH,
    alignItems: "center",
    alignSelf: "center",
    // justifyContent: "center",
  },
});
