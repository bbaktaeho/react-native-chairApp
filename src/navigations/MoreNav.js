import { createStackNavigator } from "react-navigation";
import Home_four from "../screens/main/Home_four";
import AppConfig from "../screens/main/AppConfig";

export default MoreNav = createStackNavigator(
  {
    Home_four: {
      screen: Home_four,
      navigationOptions: ({ navigation }) => ({
        header: () => {},
      }),
    },
    AppConfig: {
      screen: AppConfig,
      navigationOptions: ({ navigation }) => ({
        header: () => {},
        title: "앱 정보",
      }),
    },
  },
  {
    initialRouteName: "Home_four",
    headerLayoutPreset: "center",
  }
);
