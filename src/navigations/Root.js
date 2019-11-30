import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const SwitchNav = createSwitchNavigator(
  {
    Login,
    SignUp
  },
  {
    initialRouteName: "Login"
  }
);
export const Tabs = createAppContainer(SwitchNav);
