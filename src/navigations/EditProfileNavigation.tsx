import { createStackNavigator } from "react-navigation-stack";
import EditProfileScreen from "../screens/EditProfileScreen/EditProfileScreen";

const EditProfileNavigation = createStackNavigator(
  {
    EditProfileScreen,
  },
  {
    initialRouteName: "EditProfileScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default EditProfileNavigation;
