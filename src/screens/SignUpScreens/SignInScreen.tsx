import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackArrow from "../../components/BackArrow";
import CustomTextInput from "../../components/CustomTextInput";

const SignInScreen = () => {
  return (
    <View>
      <View>
        <BackArrow />
      </View>
      <View>
        <Text>Sign in</Text>
        <Text>Welcome back</Text>
      </View>
      <View>
        <CustomTextInput />
        <CustomTextInput />
      </View>
      <View>
        <Text>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
