/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  OnBoardingScreen1: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  VerificationScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  OnBoardingScreen1: undefined;
  HomeScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Props = NativeStackScreenProps<
  RootStackParamList,
  "OnBoardingScreen1"
>;

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignInScreen"
>;

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpScreen"
>;
export type VerificationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerificationScreen"
>;
export type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPasswordScreen"
>;
