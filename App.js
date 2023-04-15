import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from "expo-font";
import ThemeProvider from "./src/context/ThemeProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans: require("./assets/fonts/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}
