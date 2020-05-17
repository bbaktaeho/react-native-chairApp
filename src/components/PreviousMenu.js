import React from "react";
import { Icon } from "react-native-elements";

const PreviousMenu = (props, nav) => {
  // console.log("안녕", nav);

  return nav == "privacy" ? (
    <Icon
      color="black"
      name="arrow-back"
      onPress={() => props.navigation.navigate("Home_three")}
    />
  ) : (
    <Icon
      color="black"
      name="arrow-back"
      onPress={() => props.navigation.navigate("Home_three")}
    />
  );
};

export default PreviousMenu;
