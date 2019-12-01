import { createSwitchNavigator } from "react-navigation";
import Sets from "../screens/settings";

export const SettingNav = createSwitchNavigator(
  {
    Index: { screen: Sets }
    // Vib: {},
    // Blue: {},
    // notify: {}
  },
  {
    initialRouteName: "Index"
  }
);
