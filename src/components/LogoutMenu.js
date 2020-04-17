import React from "react";
import { Alert, BackHandler, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

/* 로그인 체크하고 post로 state(p0 - p8 보내기) */

const LogoutMenu = (props) => {
  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");

    props.navigation.navigate("AuthNav");
  };

  exit_removeItem = async () => {
    await AsyncStorage.removeItem("token");

    BackHandler.exitApp();
  };

  return (
    <Icon
      name="power"
      size={22}
      type="feather"
      onPress={() => {
        Alert.alert(
          "프로그램 종료",
          "종료하시겠습니까?",
          [
            { text: "취소", style: "cancel" },
            {
              text: "로그아웃",
              onPress: () => this.logout_removeItem(),
            },
            {
              text: "종료",
              onPress: () => this.exit_removeItem(),
            },
          ],
          {
            cancelable: false,
          }
        );
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    statData: state.statdata.statData,
  };
}

export default connect(mapStateToProps)(LogoutMenu);
