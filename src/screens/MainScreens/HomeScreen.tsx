import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Text>top bar</Text>
        <View style={styles.headerTextContainer}>
          <View style={styles.gmContainer}>
            <Text>Good morning</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text>Anderson</Text>
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
  headerContainer: {},
  headerTextContainer: {},
  gmContainer: {},
  nameContainer: {},
  iconContainer: {},
  cardContainer: {},
  menuContainer: {},
});
