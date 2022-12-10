import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import Cart from "../../components/svg/HomeScreenSvg/Cart";
import { width } from "../../constants/Layout";

const Header = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerTextContainer}>
        <View style={styles.gmContainer}>
          <Text style={styles.gm}>Good morning</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Anderson</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Cart/>
        <Octicons
          name="person"
          size={26}
          color="#001833"
          style={{ paddingLeft: 20, top:2 }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: width * 0.9,
    // backgroundColor: "pink",
    alignSelf: "center",
  },
  headerTextContainer: {},
  gmContainer: {},
  gm: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "#D8D8D8",
  },
  nameContainer: {},
  name: {
    fontFamily: "poppins-medium",
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: "row",
  },
});
