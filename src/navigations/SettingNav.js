import { createSwitchNavigator } from "react-navigation";
import Sets from "../screens/settings/index";
import Bluetooth from "../screens/settings/Bluetooth";
import Vib from "../screens/settings/Vibrator";
// import Not from "../screens/settings/Notify";
import React from "react";

export default SettingNav = createSwitchNavigator(
  {
    Index: {
      screen: Sets
      // navigationOptions: ({ navigation }) => ({})
    },
    Blue: {
      screen: Bluetooth
    },
    Vib
    // Not
  },
  {
    initialRouteName: "Index"
  }
);
