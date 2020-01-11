import React from "react";
import { RootNav } from "./navigations/Root";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import MyStatusBar from "./components/StatusBar";
import { PermissionsAndroid, Alert, BackHandler } from "react-native";

import BluetoothSerial, {
  withSubscription
} from "react-native-bluetooth-serial-next";
import Toast from "@remobile/react-native-toast";

import { Buffer } from "buffer";
global.Buffer = Buffer;

const store = createStore(rootReducer);

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.isConnected = false; // taeho
    this.realtime = false;
    this.state = {
      connected: false,
      isEnabled: false,
      device: null,
      devices: [],
      scanning: false,
      processing: false
    };
  }

  async componentDidMount() {
    this.events = this.props.events;

    // 블루투스 검색할 수 있는 permission
    await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ).then(result => {
      if (!result) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );
      }
    });

    try {
      // 초기 어플 실행 시 작업공간
      const [isEnabled, devices] = await Promise.all([
        // paired 가져옴
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list()
      ]);
      // 블루투스가 off 라면
      if (!isEnabled) {
        // 블루투스 자동으로 on
        await BluetoothSerial.enable();
      }

      var temp = []; // 찾은 chairCommunication 저장
      var id; // 찾은 chairCommunication의 id(블루투스 adress) 저장
      for (let v of devices) {
        if (v.name === "chairCommunication") {
          temp = [v];
          id = v.id;
          break;
        }
      }
      if (temp.length > 0) {
        this.setState({
          connected: true,
          isEnabled,
          devices: temp.map(device => ({
            // chairCommunication 발견 했다면 devices에 넣어놓고
            // 객체 속성을 추가함(paired, connected)
            ...device,
            paired: true,
            connected: true
          }))
        });
        // 찾은게 있다면 강제 커넥트
        await BluetoothSerial.connect(id);
        // await this.read();
      } else {
        Toast.showLongBottom("블루투스를 등록해 주세요. 곧 종료됩니다");

        // 여기는 다 완성되고 나서 주석을 지워주시면 됩니다.
        // await this.noneChair();
      }
    } catch (e) {
      Toast.showShortBottom(e.message);
    }
  }

  noneChair() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        BackHandler.exitApp();
      }, 2500);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MyStatusBar></MyStatusBar>
        <RootNav></RootNav>
      </Provider>
    );
  }
}

export default Start;
