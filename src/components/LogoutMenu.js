import React from "react";
import { Alert, BackHandler, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import URL from "../NET";
import Fetch from "../components/Fetch";

const LogoutMenu = (props) => {
<<<<<<< HEAD
  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");

    let posarr = [];
    posarr[0] = props.statData.data1;
    posarr[1] = props.statData.data2;
    posarr[2] = props.statData.data3;
    posarr[3] = props.statData.data4;
    posarr[4] = props.statData.data5;
    posarr[5] = props.statData.data6;

    props.navigation.navigate("AuthNav");
  };

=======
>>>>>>> 01055d0419ccdf92a47e32f7fb163f60484b5ca9
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
        await AsyncStorage.setItem("tmpPostures", JSON.stringify(posarr));
      }
      await AsyncStorage.removeItem("token");
      BackHandler.exitApp();
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
