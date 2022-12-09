import { Text, View, StyleSheet } from "react-native";
import LoyaltyCard from "../../components/HomeScreenComponents/LoyaltyCard";
import Menu from "../../components/HomeScreenComponents/Menu";
import { width } from "../../constants/Layout";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <View style={styles.gmContainer}>
            <Text style={styles.gm}>Good morning</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Anderson</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <Text>profile</Text>
          <Text>Cart</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Text>Loyalty card</Text>
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
