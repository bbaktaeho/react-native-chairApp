import { createBottomTabNavigator } from "react-navigation";
import React from "react";

import Stat_one from "../screens/statistics/Stat_one";
import Stat_two from "../screens/statistics/Stat_two";
import Stat_three from "../screens/statistics/Stat_three";

import Icon from "react-native-vector-icons/SimpleLineIcons";

export default StatNav = createBottomTabNavigator(
  {
    일간: { screen: Stat_one },
    월간: { screen: Stat_two },
    총: { screen: Stat_three },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === "일간") {
          iconName = "chart";
        } else if (routeName === "월간") {
          iconName = "chart";
        } else if (routeName === "총") {
          iconName = "pie-chart";
        }
        return <IconComponent name={iconName} size={22} color={tintColor} />;
      },
    }),
    // lazy: false,
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: "#695c4c",
      inactiveTintColor: "#d3d3d3",
    },
  }
);
