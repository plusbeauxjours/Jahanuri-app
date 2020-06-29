import { createStackNavigator } from "react-navigation-stack";
import ReportDetailScreen from "../screens/ReportDetailScreen";
import ApplicationScreen from "../screens/ApplicationScreen";
import CheckListScreen from "../screens/CheckListScreen/CheckListScreen";
import ReportListScreen from "../screens/ReportListScreen/ReportListScreen";
import CreateReportScreen from "../screens/CreateReportScreen/CreateReportScreen";

const ReportNavigation = createStackNavigator(
  {
    ReportListScreen,
    ReportDetailScreen,
    CreateReportScreen,
    CheckListScreen,
    ApplicationScreen,
  },
  {
    initialRouteName: "ReportListScreen",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default ReportNavigation;
