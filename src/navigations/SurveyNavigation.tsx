import SurveyScreen from "../screens/SurveyScreen";
import SurveyDetailScreen from "../screens/SurveyDetailScreen";
import SubmitSurveyScreen from "../screens/SubmitSurveyScreen";
import { createStackNavigator } from "react-navigation-stack";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";

const SurveyNavigation = createStackNavigator(
  {
    SurveyScreen,
    SurveyDetailScreen,
    SubmitSurveyScreen,
    MyProfileScreen,
  },
  {
    initialRouteName: "SurveyScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default SurveyNavigation;
