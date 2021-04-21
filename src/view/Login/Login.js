import React from "react";

import { View, Text } from "react-native";

import Logo from "../../component/Logo";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../asset/color";
import { AuthContext } from "../../authContext";

export default Login = (props) => {
  const [signInInformation, setSignInInformation] = React.useState({
    email: "",
    password: "",
  });

  const { signIn } = React.useContext(AuthContext);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={{ width: "85%", alignSelf: "center" }}>
          <View>
            <Logo />
          </View>
          <TextInput
            label={"Email"}
            value={signInInformation.email}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignInInformation((prevState) => ({
                ...prevState,
                email: text,
              }))
            }
          ></TextInput>
          <TextInput
            label={"Password"}
            value={signInInformation.password}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignInInformation((prevState) => ({
                ...prevState,
                password: text,
              }))
            }
            secureTextEntry
          ></TextInput>
          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.primary_color}`,
            }}
            mode="contained"
            onPress={() => signIn(signInInformation)}
          >
            Login
          </Button>

          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.secondary_color}`,
            }}
            mode="contained"
            labelStyle={{ color: `${colors.primary_color}` }}
          >
            Register
          </Button>
        </View>
      </View>
    </>
  );
};
