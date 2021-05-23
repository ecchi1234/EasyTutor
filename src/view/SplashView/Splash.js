import React from "react";
import Logo from "../../component/Logo";
import { View, Text } from "react-native";

export default Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
    </View>
  );
};
