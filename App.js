import * as React from "react";
// for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppLoading } from "expo-app-loading";
import { useFonts } from "expo-font";
import * as SecureStore from "expo-secure-store";
import { View, Text, Image } from "react-native";
import Logo from "./src/component/Logo";
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
  Button,
  BottomNavigation,
} from "react-native-paper";
import authApi from "./src/api/authApi";
import Login from "./src/view/Login";
import Splash from "./src/view/SplashView/Splash";
import PostDetail from "./src/view/PostDetail";
import Profile from "./src/view/Profile";
import Register from "./src/view/Register";
import ListAvailableJob from "./src/view/TutorView/ListAvailableJob";
import PostFilter from "./src/view/TutorView/PostFilter";
import Chat from "./src/view/Chat/Chat";
import ListMessage from "./src/view/Chat/ListMessage";
import { colors } from "./src/asset/color";

import { AuthContext } from "./src/authContext";
import fontConfig from "./src/config/font";

const theme = {
  ...DefaultTheme,

  fonts: fontConfig.android,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary_color,
  },
};

export default function App() {
  // state for sign-in/register/sign-out

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        authApi
          .login(data)
          .then((res) => {
            SecureStore.setItemAsync("userToken", res.token);
            dispatch({ type: "SIGN_IN", token: res.token });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      signOut: () => {
        SecureStore.deleteItemAsync("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        authApi
          .register(data)
          .then((res) => {
            SecureStore.setItemAsync("userToken", res.token);
            dispatch({ type: "SIGN_IN", token: res.token });
          })
          .catch((err) => {
            console.log(err);
          });
      },
    }),
    []
  );

  const [loaded] = useFonts({
    MontserratLight: require("./src/asset/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("./src/asset/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./src/asset/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("./src/asset/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./src/asset/fonts/Montserrat-Bold.ttf"),
    MontserratBlack: require("./src/asset/fonts/Montserrat-Black.ttf"),
    Montserrat: require("./src/asset/fonts/Montserrat-Medium.ttf"),
  });

  if (!loaded) {
    return <Splash />;
  }

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <Splash />;
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        {state.userToken === null ? (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  switch (route.name) {
                    case "Job": {
                      iconName = focused
                        ? require("./src/asset/job-focused.png")
                        : require("./src/asset/job-not-focused.png");
                      break;
                    }
                    case "Chat": {
                      iconName = focused
                        ? require("./src/asset/chat-focused.png")
                        : require("./src/asset/chat-not-focused.png");
                      break;
                    }
                    case "Notification": {
                      iconName = focused
                        ? require("./src/asset/notification-focused.png")
                        : require("./src/asset/notification-not-focused.png");
                      break;
                    }
                    case "Profile": {
                      iconName = focused
                        ? require("./src/asset/profile-focused.png")
                        : require("./src/asset/profile-not-focused.png");
                      break;
                    }
                    case "Proposals": {
                      iconName = focused
                        ? require("./src/asset/proposals-focused.png")
                        : require("./src/asset/proposals-not-focused.png");
                      break;
                    }
                  }

                  // You can return any component that you like here!

                  return (
                    <View
                      style={{
                        borderRadius: 5,
                        padding: 5,
                        backgroundColor: focused
                          ? "#F1F9ED"
                          : colors.background_color,
                        width:
                          (size * Image.resolveAssetSource(iconName).width) /
                          Image.resolveAssetSource(iconName).height,
                        height: size,
                      }}
                    >
                      <Image
                        source={iconName}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      ></Image>
                    </View>
                  );
                },
              })}
              tabBarOptions={{
                activeTintColor: colors.primary_information_text_color,
                inactiveTintColor: colors.tab_color,
                // activeBackgroundColor: "#F1F9ED",
                // inactiveBackgroundColor: colors.background_color,
                labelStyle: {
                  fontFamily: "Montserrat",
                },
              }}
            >
              <Tab.Screen name="Job" component={PostDetail} />
              <Tab.Screen name="Chat" component={Chat} />
              <Tab.Screen name="Notification" component={ListMessage} />
              <Tab.Screen name="Profile" component={Profile} />
              <Tab.Screen name="Proposals" component={ListAvailableJob} />
              {/* <Tab.Screen name="Notifications" component={Splash} /> */}
            </Tab.Navigator>
          </NavigationContainer>
          // <View
          //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          // >
          //   <Button onPress={() => authContext.signOut()}>Sign out</Button>
          // </View>
        )}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
