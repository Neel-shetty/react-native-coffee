import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import MenuItem from "./MenuItem";
import { menu } from "../../../assets/dummyData/MenuData";

const Menu = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your coffee</Text>
      </View>
      <View>
        <FlatList
          data={menu}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <MenuItem data={item} />
            </View>
          )}
          numColumns={2}
        />
        <Text>tabbar</Text>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#324A59",
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "flex-start",
    width: width * 0.9,
  },
  title: {
    color: "#D8D8D8",
    fontFamily: "poppins-semibold",
    fontSize: 16,
  },
});
