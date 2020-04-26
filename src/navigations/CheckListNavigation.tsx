import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import CheckListScreen from "../screens/CheckListScreen";
import { Appbar } from "react-native-paper";

const CheckListNavigation = createStackNavigator(
  {
    CheckListScreen,
  },
  {
    initialRouteName: "CheckListScreen",
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

export default CheckListNavigation;
