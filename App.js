import * as React from "react";
import * as Font from "expo-font";
import { View, Text } from "react-native";
import Logo from "./src/component/Logo";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
      </View>
    </PaperProvider>
  );
}
