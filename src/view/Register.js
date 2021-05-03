import React from "react";

import { View, Text } from "react-native";

import { Button, TextInput, RadioButton } from "react-native-paper";
import { colors } from "../asset/color";
import { AuthContext } from "../authContext";

export default Register = (props) => {
  const [signUpInformation, setSignUpInformation] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isTutor: true,
  });

  const { signUp } = React.useContext(AuthContext);

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
            <Text>Create new account</Text>
          </View>
          <TextInput
            label={"Name"}
            value={signUpInformation.name}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignUpInformation((prevState) => ({
                ...prevState,
                name: text,
              }))
            }
          ></TextInput>
          <TextInput
            label={"Email"}
            value={signUpInformation.phoneNumber}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignUpInformation((prevState) => ({
                ...prevState,
                phoneNumber: text,
              }))
            }
          ></TextInput>
          <TextInput
            label={"Email"}
            value={signUpInformation.email}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignUpInformation((prevState) => ({
                ...prevState,
                email: text,
              }))
            }
          ></TextInput>
          <TextInput
            label={"Password"}
            value={signUpInformation.password}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignUpInformation((prevState) => ({
                ...prevState,
                password: text,
              }))
            }
            secureTextEntry
          ></TextInput>

          <TextInput
            label={"Password"}
            value={signUpInformation.passwordConfirmation}
            mode={"outlined"}
            onChangeText={(text) =>
              setSignUpInformation((prevState) => ({
                ...prevState,
                passwordConfirmation: text,
              }))
            }
            secureTextEntry
          ></TextInput>

          <View>
            <Text>Ban dang ky de?</Text>
            <View>
              <RadioButton
                value="true"
                status={signUpInformation.isTutor ? "checked" : "unchecked"}
                onPress={() =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    isTutor: true,
                  }))
                }
              />
              <RadioButton
                value="false"
                status={!signUpInformation.isTutor ? "checked" : "unchecked"}
                onPress={() =>
                  setSignUpInformation((prevState) => ({
                    ...prevState,
                    isTutor: false,
                  }))
                }
              />
            </View>
          </View>

          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.primary_color}`,
            }}
            mode="contained"
            onPress={() => signUp(signUpInformation)}
          >
            Register
          </Button>

          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.secondary_color}`,
            }}
            mode="contained"
            labelStyle={{ color: `${colors.primary_color}` }}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login
          </Button>
        </View>
      </View>
    </>
  );
};
