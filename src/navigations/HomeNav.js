import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";

import MainHaeder from "../components/MainHeader";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Home_three from "../screens/main/Home_three";

const Homess = createBottomTabNavigator(
  {
    one: { screen: Home_one },
    two: { screen: Home_two },
    three: { screen: Home_three }
  },
  {
    initialRouteName: "one"
  }
);

const Homes = createAppContainer(Homess);

export default class HomeNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainHaeder openDrawer={this.props.navigation.openDrawer}></MainHaeder>
        <Homes></Homes>
      </React.Fragment>
    );
  }
}
