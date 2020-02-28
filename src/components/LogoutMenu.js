import React, { Component } from "react";
import { Alert } from "react-native";
import { Icon } from "react-native-elements";

const LogoutMenu = props => {
  return (
    <Icon
      name="log-out"
      size={20}
      type="feather"
      onPress={() => {
        Alert.alert(
          "프로그램 종료",
          "종료하시겠습니까?",
          [
            { text: "취소", style: "cancel" },
            {
              text: "로그아웃",
              onPress: () => props.navigation.navigate("AuthNav")
            },
            {
              text: "종료",
              onPress: () => press2
            }
          ],
          {
            cancelable: false
          }
        );
      }}
    />
  );
};

export default LogoutMenu;
