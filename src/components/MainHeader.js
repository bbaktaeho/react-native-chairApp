import React from "react";
import { Header, Left, Body } from "native-base";
import { TouchableOpacity, Image, Text } from "react-native";
import { colors } from "../styles/styles";

const MainHaeder = () => (
  <Header style={{ backgroundColor: colors.header }}>
    <Left>
      <TouchableOpacity onPress={this.props.openDrawer}>
        {/* <Image
              source={require("../assets/Images/menu.png")}
              style={{ width: 25, height: 25 }}
            ></Image> */}
        <Text>메뉴다</Text>
      </TouchableOpacity>
    </Left>
    <Body></Body>
  </Header>
);
