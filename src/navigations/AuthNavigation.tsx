import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import LoginForm from "../screens/AuthScreen/LoginForm";
import SignupForm from "../screens/AuthScreen/SignupForm";

const AuthNavigation = createStackNavigator(
  {
    AboutScreen: { screen: AboutScreen },
    ContactScreen: { screen: ContactScreen },
    HomeScreen: { screen: HomeScreen },
    Login: { screen: LoginForm },
    SignUp: { screen: SignupForm },
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default AuthNavigation;
