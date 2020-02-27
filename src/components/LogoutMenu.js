import React, { Component } from "react";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";

export default class LogoutMenu extends Component {
  myAlert = (title = "", message = "") => {
    Alert.alert(
      title,
      message,
      [{ text: "취소", style: "cancel" }, { text: "종료" }],
      {
        cancelable: false
      }
    );
  };

  dispatch(view = "") {
    this.props.navigation.navigate(view);
  }

  render() {
    return (
      <Icon
        name="log-out"
        size={20}
        type="feather"
        onPress={() => {
          this.myAlert("LOGOUT", "앱을 종료하시겠습니까?");
        }}
      />
    );
  }
}
