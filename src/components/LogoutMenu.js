import React from "react";
import { Alert, BackHandler, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
import RNExitApp from "react-native-exit-app";
import { connect } from "react-redux";
import URL from "../NET";
import Fetch from "../components/Fetch";
import moment from "moment";

const LogoutMenu = (props) => {
  exit_removeItem = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const { data1, data2, data3, data4, data5, data6 } = props.statData;
      let posarr = [data1, data2, data3, data4, data5, data6];
      const result = await Fetch(
        URL.posturesave,
        "POST",
        {
          postures: posarr,
        },
        token
      );
      const body = JSON.parse(result._bodyText);
      if (body.success) console.log("저장 성공");
      else {
        console.log("저장 실패");
        const date = moment().format("YYYY-MM-DD");
        await AsyncStorage.setItem(date, JSON.stringify(posarr));
      }
      await AsyncStorage.removeItem("token");
      RNExitApp.exitApp();
    } catch (err) {}
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
              text: "종료",
              style: "destructive",
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
