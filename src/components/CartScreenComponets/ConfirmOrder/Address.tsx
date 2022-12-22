import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../../../constants/Layout";

const Address = () => {
  return (
    <View>
      <View style={styles.headerConatiner}>
        <Text style={styles.header}>Delivery Address</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="bicycle" size={24} />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.name}>Anderson</Text>
          <Text style={styles.address}>3 addersion court</Text>
          <Text style={styles.address}>Chino hills, H5042624,united states</Text>
        </View>
        <View style={styles.editContainer}>
          <Ionicons name="md-pencil" size={24} />
        </View>
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  headerConatiner: {},
  header: {
    fontFamily: "poppins-medium",
    fontSize: 14,
    color: "#172B4D",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.9,
  },
  addressContainer: {
    alignItems:'flex-start'
  },
  address: {
    fontFamily: "poppins-light",
    fontSize: 10,
    color: "#001833",
  },
  name: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: "#001833",
  },
  iconContainer: {
    width: 47,
    height: 47,
    borderRadius: 12,
    backgroundColor: "#F7F8FB",
    alignItems: "center",
    justifyContent: "center",
  },
  editContainer: {},
});
