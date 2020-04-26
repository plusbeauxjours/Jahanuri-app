import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import ReportScreen from "../screens/ReportScreen";
import { Appbar } from "react-native-paper";

const ReportNavigation = createStackNavigator(
  {
    ReportScreen,
  },
  {
    initialRouteName: "ReportScreen",
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

export default ReportNavigation;
