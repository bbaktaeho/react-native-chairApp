import React from "react";
import { Icon } from "react-native-elements";

const PreviousMenu = (props) => {
  return (
    <Icon
      color="black"
      name="arrow-back"
      onPress={() => props.navigation.navigate("Home_three")}
    />
  );
};

export default PreviousMenu;
