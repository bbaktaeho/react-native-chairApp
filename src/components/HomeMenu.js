import React from "react";
import { Icon } from "react-native-elements";

const HomeMenu = props => {
  return (
    <Icon
      color="black"
      name="home"
      onPress={() => props.navigation.navigate("HomeNav")}
    />
  );
};

export default HomeMenu;
