import { Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;
export const paddingH = 0.8;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
