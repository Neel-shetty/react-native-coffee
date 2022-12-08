import { Text, View, StyleSheet } from "react-native";

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
      </View>

      <View style={styles.menuContainer}>
        <View>
          <Text>heading</Text>
        </View>
        <View>
          <Text>tiles</Text>
        </View>
        <View>
          <Text>tabbar</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  },
  nameContainer: {
  
  },
  name: {},
  iconContainer: {
    flexDirection: "row",
  },
  cardContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
