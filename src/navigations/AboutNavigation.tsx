import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import AboutScreen from "../screens/AboutScreen";
import { Appbar } from "react-native-paper";

const AboutNavigation = createStackNavigator(
  {
    AboutScreen,
  },
  {
    initialRouteName: "AboutScreen",
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

export default AboutNavigation;
