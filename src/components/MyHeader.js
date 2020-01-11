import React from "react";
import { Platform } from "react-native";
import { Header } from "react-native-elements";

import HamburgerMenu from "./HamburgerMenu";
// import HomeMenu from "./HomeMenu";
import PreviousMenu from "./PreviousMenu";
import { colors } from "../styles/styles";

const MyHeader = props => {
  return (
    <Header
      statusBarProps={{ translucent: true }}
      // 이건 해도되고 안해도 되고
      containerStyle={Platform.select({
        android: Platform.Version <= 20 ? { paddingTop: 0, height: 56 } : {}
      })}
      leftComponent={
        props.type == "setting" ? (
          <PreviousMenu navigation={props.navigation} />
        ) : (
          <HamburgerMenu navigation={props.navigation} />
        )
      }
      centerComponent={{
        text: props.title,
        style: { color: "black" }
      }}
      rightComponent={props.right}
      backgroundColor={colors.header}
    />
  );
};

export default MyHeader;
