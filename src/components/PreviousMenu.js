import React from "react";
import { Icon } from "react-native-elements";

const PreviousMenu = (props) => {
  return props.select == "p" ? (
    <Icon
      color="black"
      name="arrow-back"
      onPress={() => props.navigation.navigate("Home_three")}
    />
  ) : (
    <Icon
      color="black"
      name="arrow-back"
      onPress={() => props.navigation.navigate("Home_four")}
    />
  );
};

export default PreviousMenu;
