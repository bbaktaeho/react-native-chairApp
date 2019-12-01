import React from "react";
import { Header, Left, Body } from "native-base";
import { TouchableOpacity, Image } from "react-native";
import { colors } from "../styles/styles";

export default class MainHeader extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: colors.header }}>
        <Left>
          <TouchableOpacity onPress={this.props.openDrawer}>
            <Image
              source={require("../assets/Images/menu.png")}
              style={{ width: 25, height: 25 }}
            ></Image>
          </TouchableOpacity>
        </Left>
        <Body></Body>
      </Header>
    );
  }
}
