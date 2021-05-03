import React from "react";
import LottieView from "lottie-react-native";
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
      {/* <LottieView source={require("../../asset/splash.json")} autoPlay loop /> */}
      <Text>Test</Text>
    </View>
  );
};
