import { createStackNavigator } from "react-navigation-stack";
import ReportDetailScreen from "../screens/ReportDetailScreen";
import PaymentInformationScreen from "../screens/PaymentInformationScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";

const ReportNavigation = createStackNavigator(
  {
    ReportDetailScreen,
    CheckListScreen,
    ApplicationScreen,
    PaymentInformationScreen,
  },
  {
    initialRouteName: "ReportDetailScreen",
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default ReportNavigation;
