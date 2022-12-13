import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import Glass from "../../components/svg/HomeScreenSvg/options/glass";
import Cup from "../../components/svg/HomeScreenSvg/options/cup";
import Small from "../../components/svg/HomeScreenSvg/options/glassSmall";
import Medium from "../../components/svg/HomeScreenSvg/options/glassMedium";
import Large from "../../components/svg/HomeScreenSvg/options/glassLarge";

const CoffeeOptions = () => {
  return (
    <View style={styles.root}>
      <View style={styles.item}>
        <Text style={styles.title}>Americano</Text>
        <View style={styles.toggle}>
          {/* <Ionicons name="add" size={20} /> */}
          <Text style={styles.title}> - </Text>
          <Text style={styles.title}> 1 </Text>
          <Text style={styles.title}> + </Text>
          {/* <Ionicons name="" /> */}
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Shot</Text>
        <View style={styles.twoToggle}>
          <View style={styles.toggle}>
            <Text style={styles.title}>Single</Text>
          </View>
          <View style={styles.toggle}>
            <Text style={styles.title}>Double</Text>
          </View>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Select</Text>
        <View style={styles.twoToggle}>
          <Cup style={{ marginHorizontal: 25 }} />
          <Glass />
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Size</Text>
        <View style={styles.twoToggle}>
          <Small style={{ marginHorizontal: 20 }} />
          <Medium style={{marginRight:20}}/>
          <Large />
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Ice</Text>
      </View>
    </View>
  );
};

export default CoffeeOptions;

const styles = StyleSheet.create({
  root: {
  alignItems:'center'
  },
  item: {
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
  title: {
    fontFamily: "dmsans-medium",
    fontSize: 14,
    color: "#001833",
    borderColor: "#F4F5F7",
  },
  toggle: {
    height: 30,
    width: 75,
    borderRadius: 50,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  twoToggle: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
