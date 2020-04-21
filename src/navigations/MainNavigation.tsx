import { createSwitchNavigator, createAppContainer } from "react-navigation";
import MainDrawer from "./MainDrawer";
import AuthLoadingContainer from "../components/AuthLoadingContainer";
import AuthNavigation from "./AuthNavigation";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const MainNavigation = createSwitchNavigator(
  {
    AuthLoading: HomeScreen,
    Auth: AuthNavigation,
    Main: MainDrawer,
  },
  {
    initialRouteName: "AuthLoading",
  }
);

export default createAppContainer(MainNavigation);
