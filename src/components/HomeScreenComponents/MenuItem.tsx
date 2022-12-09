import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// interface item {
//   id: number;
//   name: string;
//   image: any;
//   cost: string;
//   data: any
// }

interface dataProp {
  data: any;
}

const MenuItem = ({ data }: dataProp) => {
  return (
    <View style={styles.root}>
      {/* <Image source={require("../../../assets/images/Home/coffee1.png")} /> */}
      <Image source={data.image} />
      <Text style={styles.title}>{data.name}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  root: {
    height: 164,
    width: 154,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 14,
  },
});
