import { createSwitchNavigator, createAppContainer } from "react-navigation";
import ApplicationScreen from "../screens/ApplicationScreen";

const ApplicationNavigation = createSwitchNavigator(
  {
    ApplicationScreen,
  },
  {
    initialRouteName: "ApplicationScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(ApplicationNavigation);
