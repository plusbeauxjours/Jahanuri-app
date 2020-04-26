import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import EditProfileScreen from "../screens/EditProfileScreen";
import { Appbar } from "react-native-paper";

const EditProfileNavigation = createStackNavigator(
  {
    EditProfileScreen,
  },
  {
    initialRouteName: "EditProfileScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY_COLOR,
      },
      headerTintColor: "#fff",
      headerLeft: ({ navigation }) => {
        return (
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        );
      },
    },
  }
);

export default EditProfileNavigation;
