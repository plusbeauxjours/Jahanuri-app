import { createStackNavigator } from "react-navigation-stack";
import ReportDetailScreen from "../screens/ReportDetailScreen";
import PaymentInformationScreen from "../screens/PaymentInformationScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ReportListScreen from "../screens/ReportListScreen/ReportListScreen";

const ReportNavigation = createStackNavigator(
  {
    ReportListScreen,
    ReportDetailScreen,
    CheckListScreen,
    ApplicationScreen,
    PaymentInformationScreen,
  },
  {
    initialRouteName: "ReportListScreen",
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default ReportNavigation;
