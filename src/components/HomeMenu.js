import React from "react";
import { Icon } from "react-native-elements";

const HomeMenu = props => {
  return <Icon color="black" name="home" onPress={() => console.log(props)} />;
};

export default HomeMenu;
