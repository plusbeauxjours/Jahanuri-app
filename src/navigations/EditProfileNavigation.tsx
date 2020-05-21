import { createStackNavigator } from "react-navigation-stack";
import EditProfileScreen from "../screens/EditProfileScreen/EditProfileScreen";
import MyProfileScreen from "../screens/MyProfileScreen/MyProfileScreen";

const EditProfileNavigation = createStackNavigator(
  {
    EditProfileScreen,
    MyProfileScreen,
  },
  {
    initialRouteName: "EditProfileScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default EditProfileNavigation;
