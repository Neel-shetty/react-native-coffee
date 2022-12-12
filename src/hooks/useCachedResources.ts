import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          "poppins-regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
          "poppins-medium": require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
          "poppins-light": require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
          "poppins-semibold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
          "dmsans-medium": require("../../assets/fonts/DM_Sans/DMSans-Medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
