import { createStackNavigator } from "react-navigation-stack";
import { PRIMARY_COLOR } from "../constants/colors";

import ContactScreen from "../screens/ContactScreen";
import { Appbar } from "react-native-paper";

const ContactNavigation = createStackNavigator(
  {
    ContactScreen,
  },
  {
    initialRouteName: "ContactScreen",
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

export default ContactNavigation;
