import { createBottomTabNavigator } from "react-navigation";
import React from "react";

import { Text } from "react-native";

import Stat_one from "../screens/statistics/Stat_one";
import Stat_two from "../screens/statistics/Stat_two";
import Stat_three from "../screens/statistics/Stat_three";

export default StatNav = createBottomTabNavigator(
  {
    일일: { screen: Stat_one },
    월간: { screen: Stat_two },
    총: { screen: Stat_three }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === "일일") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
              일일
            </Text>
          );
        } else if (routeName === "월간") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
              월간
            </Text>
          );
        } else if (routeName === "총") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>총</Text>
          );
        }
      }
    }),
    lazy: false,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888"
    }
  }
);
