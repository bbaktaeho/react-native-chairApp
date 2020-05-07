import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Icon from "react-native-vector-icons/EvilIcons";

const HomeNav = createBottomTabNavigator(
  {
    내자세: { screen: Home_one },
    내의자: { screen: Home_two },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === "내자세") {
          iconName = "heart";
        } else if (routeName === "내의자") {
          iconName = "archive";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#695c4c",
      inactiveTintColor: "#d3d3d3",
    },
  }
);

export default createAppContainer(HomeNav);
