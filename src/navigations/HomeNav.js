import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Home_three from "../screens/main/Home_three";
import Icon from "react-native-vector-icons/FontAwesome5";

// export default HomeNav = createBottomTabNavigator(
//   {
//     one: { screen: Home_one },
//     two: { screen: Home_two },
//     three: { screen: Home_three },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;

//         if (routeName === "one") {
//           iconName = "home";
//         } else if (routeName === "two") {
//           return (
//             <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
//               센서
//             </Text>
//           );
//         } else if (routeName === "three") {
//           return (
//             <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
//               예측
//             </Text>
//           );
//         }
//       },
//     }),
//     lazy: false,
//     tabBarOptions: {
//       showLabel: false,
//       activeTintColor: "#46c3ad",
//       inactiveTintColor: "#888",
//     },
//   }
// );

const HomeNav = createBottomTabNavigator(
  {
    내자세: { screen: Home_one },
    내의자: { screen: Home_two },
    예측: { screen: Home_three },
    // 로그아웃: { screen: Home_three },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === "내자세") {
          // iconName = `child${focused ? "" : "-outline"}`;
        } else if (routeName === "내의자") {
          iconName = "chair";
        } else if (routeName === "예측") {
          iconName = "chart-line";
        } else if (routeName === "로그아웃") {
          iconName = "door-closed";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
);

export default createAppContainer(HomeNav);
