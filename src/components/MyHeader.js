import React from "react";
import { Platform } from "react-native";
import { Header } from "react-native-elements";

import HamburgerMenu from "./HamburgerMenu";
import PreviousMenu from "./PreviousMenu";
import LogoutMenu from "./LogoutMenu";
import { colors } from "../styles/styles";
import myHeaderStyle from "../myStyles/MyHeaderStyle";

const MyHeader = (props) => {
  return (
    <Header
      statusBarProps={{ translucent: true }} // 이건 해도되고 안해도 되고
      containerStyle={Platform.select({
        android: Platform.Version <= 20 ? myHeaderStyle.container : {},
      })}
      leftComponent={
        props.type == "privacy" ? (
          <PreviousMenu navigation={props.navigation} nav="privacy" />
        ) : (
          <HamburgerMenu navigation={props.navigation} />
        )
      }
      centerComponent={{
        text: props.title,
        style: { color: "#6e675f" },
      }}
      rightComponent={<LogoutMenu navigation={props.navigation} />}
      backgroundColor={colors.header}
    />
  );
};

export default MyHeader;
