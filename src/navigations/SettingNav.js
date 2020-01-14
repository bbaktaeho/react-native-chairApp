import { createSwitchNavigator } from "react-navigation";
import Sets from "../screens/settings/index";
import Vib from "../screens/settings/Vibrator";
// import Not from "../screens/settings/Notify";

export default SettingNav = createSwitchNavigator(
  {
    Index: {
      screen: Sets
      // navigationOptions: ({ navigation }) => ({})
    },
    Vib
    // Not
  },
  {
    initialRouteName: "Index"
  }
);
