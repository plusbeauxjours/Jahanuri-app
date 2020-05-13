import { createStackNavigator } from "react-navigation-stack";
import AboutScreen from "../screens/AboutScreen";

const AboutNavigation = createStackNavigator(
  {
    AboutScreen,
  },
  {
    initialRouteName: "AboutScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default AboutNavigation;
