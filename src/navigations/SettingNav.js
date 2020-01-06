import { createSwitchNavigator } from "react-navigation";
import Sets from "../screens/settings";
import React from "react";

export default SettingNav = createSwitchNavigator(
  {
    Index: {
      screen: Sets
      // navigationOptions: ({ navigation }) => ({})
    }
    // Vib: {},
    // Blue: {},
    // notify: {}
  },
  {
    initialRouteName: "Index"
  }
);
