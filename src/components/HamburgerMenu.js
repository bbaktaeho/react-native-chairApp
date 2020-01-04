import React from "react";
import { Icon } from "react-native-elements";

const HamburgerMenu = props => {
  return (
    <Icon
      color="black"
      name="menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};

export default HamburgerMenu;
