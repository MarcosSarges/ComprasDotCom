import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootRouter from "@routes/RootRouter";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import theme from "./styles";
import { useWindowDimensions } from "react-native";

const App: React.FC = () => {
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();
  return (
    <ThemeProvider theme={{ ...theme, insets, dimensions }}>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
