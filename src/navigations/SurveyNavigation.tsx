import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SurveyScreen from "../screens/SurveyScreen/index";

const SurveyNavigation = createSwitchNavigator(
  {
    SurveyScreen,
  },
  {
    initialRouteName: "SurveyScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(SurveyNavigation);
