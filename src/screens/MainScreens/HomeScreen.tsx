import { Text, View, StyleSheet, Image } from "react-native";
import LoyaltyCard from "../../components/HomeScreenComponents/LoyaltyCard";
import Menu from "../../components/HomeScreenComponents/Menu";
import { width } from "../../constants/Layout";
import Cart from "../../components/svg/HomeScreenSvg/Cart";
import { Octicons } from "@expo/vector-icons";
import Header from "../../components/HomeScreenComponents/Header";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.cardContainer}>
        <LoyaltyCard />
      </View>

      <View style={styles.menuContainer}>
        <Menu />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: width * 0.9,
    alignSelf: "center",
    marginTop: 20,
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
  cardContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
});
