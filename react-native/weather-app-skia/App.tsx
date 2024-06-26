import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./src/screens/Home";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-Thin": require("./src/assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("./src/assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Semibold": require("./src/assets/fonts/SF-Pro-Display-Semibold.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Home />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
