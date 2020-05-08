import { createStackNavigator } from "react-navigation-stack";
import ContactScreen from "../screens/ContactScreen";

const ContactNavigation = createStackNavigator(
  {
    ContactScreen,
  },
  {
    initialRouteName: "ContactScreen",
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default ContactNavigation;
