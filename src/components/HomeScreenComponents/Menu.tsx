import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import MenuItem from "./MenuItem";
import { menu } from "../../../assets/dummyData/MenuData";
import TabBar from "./TabBar";

const Menu = () => {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your coffee</Text>
      </View>
      <View style={{ height: 390, width: width * 0.9 }}>
        <FlatList
          data={menu}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <MenuItem data={item} id={item.id} />
            </View>
          )}
          numColumns={2}
        />
      </View>
      <View>
        <TabBar />
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleContainer: {
    alignItems: "flex-start",
    width: width * 0.8,
    paddingBottom: 10,
  },
  title: {
    color: "#D8D8D8",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
});
