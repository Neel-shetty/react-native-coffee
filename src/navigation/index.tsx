/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/boilerplateScreens/ModalScreen";
import NotFoundScreen from "../screens/boilerplateScreens/NotFoundScreen";
import TabOneScreen from "../screens/boilerplateScreens/TabOneScreen";
import TabTwoScreen from "../screens/boilerplateScreens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import OnBoardingScreen1 from "../screens/OnBoardingScreens/OnBoardingScreen1";
import SignInScreen from "../screens/SignUpScreens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreens/SignUpScreen";
import ForgotPasswordScreen from "../screens/SignUpScreens/ForgotPasswordScreen";
import VerificationScreen from "../screens/SignUpScreens/VerificationScreen";
import HomeScreen from "../screens/MainScreens/HomeScreen";
import { width } from "../constants/Layout";
import Home from "../components/svg/HomeScreenSvg/Home";
import HomeGray from "../components/svg/HomeScreenSvg/HomeGray";
import Gift from "../components/svg/HomeScreenSvg/Gift";
import GiftGray from "../components/svg/HomeScreenSvg/GiftGray";
import List from "../components/svg/HomeScreenSvg/List";
import ListGray from "../components/svg/HomeScreenSvg/ListGray";
import OrdersScreen from "../screens/MainScreens/OrdersScreen";
import RewardScreen from "../screens/MainScreens/RewardScreen";
import DetailScreen from "../screens/MainScreens/DetailScreen";
import CartScreen from "../screens/MainScreens/CartScreen";
import ConfirmOrderScreen from "../screens/MainScreens/OrderSuccessScreen";
import OrderSuccessScreen from "../screens/MainScreens/OrderSuccessScreen";
import TrackOrderScreen from "../screens/MainScreens/TrackOrderScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme?: ColorSchemeName | undefined;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="OnBoardingScreen1"
        component={OnBoardingScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        options={{ headerShown: false }}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSuccessScreen"
        component={OrderSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrackOrderScreen"
        component={TrackOrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          width: width * 0.9,
          borderRadius: 15,
          height: 64,
          alignItems: "center",
          marginLeft: width / 19,
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"HomeScreen">) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (focused ? <Home /> : <HomeGray />),
        })}
      />
      <BottomTab.Screen
        name="RewardScreen"
        component={RewardScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <Gift /> : <GiftGray />),
        })}
      />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      <BottomTab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color, focused }) =>
            focused ? <List /> : <ListGray />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
