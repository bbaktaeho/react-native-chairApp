import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  ScrollView,
  Image,
  AsyncStorage
} from "react-native";
// import { Card } from "react-native-elements";
// import Toast from "@remobile/react-native-toast";
import { connect } from "react-redux";
import ActionCreator from "../../actions/index";
import initStore from "../../store/index";

import Swiper from "react-native-swiper";

import MyHeader from "../../components/MyHeader";
import Pos2 from "../../screens/guide/Pos2.js";

class Home_one extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // readData: ""
    };
  }
  // 이벤트 등록
  componentDidMount() {
    if (global.connected) {
      // 블루투스 모듈과 연결 성공 했을 때
    } else {
      // 블루투스 모듈과 연결 실패 했을 때
    }
    // BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 해제
  componentWillUnmount() {
    // this.exitApp = false;
    // BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show("한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000 // 2초
      );
    } else {
      clearTimeout(this.timeout);
      BackHandler.exitApp(); // 앱 종료
    }
    return true;
  };

  render() {
    // const aa = AsyncStorage.getItem(token);
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="홈 1"></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Pos2></Pos2>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (num, da) => {
      dispatch(ActionCreator.backchange(num, da));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_one);
