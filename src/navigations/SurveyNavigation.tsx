import SurveyScreen from "../screens/SurveyScreen/index";
import { createStackNavigator } from "react-navigation-stack";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";

const SurveyNavigation = createStackNavigator(
  {
    MyProfileScreen,
    SurveyScreen,
  },
  {
    initialRouteName: "SurveyScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default SurveyNavigation;
