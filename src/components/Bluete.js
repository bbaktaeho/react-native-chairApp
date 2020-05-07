import React from "react";
import { Provider, connect } from "react-redux";
import {
  PermissionsAndroid,
  BackHandler,
  AsyncStorage,
  ToastAndroid,
} from "react-native";
import ActionCreator from "../actions/index";
import ActionCreator2 from "../actions_2/index";
import initStore from "../store/index";

import BluetoothSerial from "react-native-bluetooth-serial-next";

import { Buffer } from "buffer";
import Fetch from "./Fetch";

global.Buffer = Buffer;
global.connected = false;

const store = initStore();

class Bluete extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.state = {
      connected: false,
      isEnabled: false,
      device: null,
      devices: [],
      scanning: false,
      processing: false,
    };
  }

  async componentDidMount() {
    this.events = this.props.events;
    // 블루투스 검색할 수 있는 permission
    await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ).then((result) => {
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
        BluetoothSerial.list(),
      ]);
      // 블루투스가 off 라면
      if (!isEnabled) {
        // 블루투스 자동으로 on
        await BluetoothSerial.enable();
      }

      var temp = []; // 찾은 chairCommunication 저장
      var id; // 찾은 chairCommunication의 id(블루투스 adress) 저장
      var check;
      for (let v of devices) {
        if (v.name === "chairCommunication") {
          temp = [v];
          id = v.id;
          break;
        }
      }
      if (temp.length > 0) {
        this.setState({
          isEnabled,
          devices: temp.map((device) => ({
            // chairCommunication 발견 했다면 devices에 넣어놓고
            // 객체 속성을 추가함(paired, connected)
            ...device,
            paired: true,
          })),
        });
        // 찾은게 있다면 강제 커넥트
        await BluetoothSerial.connect(id);

        // catch에 걸리지 않으면
        // this.state.connected = true;
        global.connected = true;
        ToastAndroid.show("블루투스와 연결되었습니다", ToastAndroid.SHORT);

        let splitData = [];
        let vib = [];
        let seat = [];
        let backd = [];
        let a, b, c;
        let merge = [];
        // 블루투스 모듈 연결이 성공했을 때
        BluetoothSerial.read((data, subscription) => {
          splitData = data.split(",");
          vib = splitData[2];
          angled = splitData[3];
          batteryd = splitData[4];
          global.vib = vib;
          backd = splitData[1].split("^");
          seat = splitData[0].split("^");
          merge = seat.concat(backd);
          for (var i = 0; i < 4; i++) {
            switch (i) {
              case 0:
                a = parseInt(backd[i]);
              case 1:
                b = parseInt(backd[i]);
              case 2:
                c = parseInt(backd[i]);
              case 3:
            }
          }
          merge.forEach((e, i) => {
            merge[i] = parseInt(e);
          });
          this.props.backchange(
            a,
            b,
            c,
            parseInt(backd[3].substring(0, 3)),
            seat,
            angled,
            batteryd
          );

          fetch("http://192.168.0.6:9009/", {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ posture: merge }),
          })
            .then((res) => {
              console.log("dsfafadfadfdfaffdf");

              const body = JSON.parse(res._bodyText);
              console.log("바디입니다 : ", body);
            })
            .catch((e) => {
              console.error("에러입니다!!!!!!: ", e.message);
            });

          if (this.imBoredNow && subscription) {
            BluetoothSerial.removeSubscription(subscription);
          }
        }, "\r\n");

        // await this.read();
      } else {
        ToastAndroid.show(
          "블루투스를 등록해 주세요. 곧 종료됩니다.",
          ToastAndroid.LONG
        );

        // 여기는 다 완성되고 나서 주석을 지워주시면 됩니다.
        // await this.noneChair();
      }
    } catch (e) {
      ToastAndroid.show(e.message, ToastAndroid.SHORT);
    }
  }

  async componentWillMount() {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }

  // 앱이 종료되는 시점에 앱 내부에 저장한 데이터를 모두 제거
  // 자동 로그인 구현 시 제거해야할 로직임
  async componentWillUnmount() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e.message);
    }
  }

  // 등록한 체어가 없다면 실행
  noneChair() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        BackHandler.exitApp();
      }, 2500);
    });
  }

  render() {
    return <Provider store={store}></Provider>;
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
    angle: state.bluedata.angle,
    battery: state.bluedata.battery,
    statData: state.statdata.statData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    seatchange: (num, da) => {
      dispatch(ActionCreator.seatchange(num, da));
    },
    backchange: (da, da2, da3, da4, da5, da6, da7) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5, da6, da7));
    },
    plus_1: (num) => {
      dispatch(ActionCreator2.plus_1(num));
    },
    plus_2: (num) => {
      dispatch(ActionCreator2.plus_2(num));
    },
    plus_3: (num) => {
      dispatch(ActionCreator2.plus_3(num));
    },
    plus_4: (num) => {
      dispatch(ActionCreator2.plus_4(num));
    },
    plus_5: (num) => {
      dispatch(ActionCreator2.plus_5(num));
    },
    plus_6: (num) => {
      dispatch(ActionCreator2.plus_6(num));
    },
    plus_7: (num) => {
      dispatch(ActionCreator2.plus_7(num));
    },
    plus_8: (num) => {
      dispatch(ActionCreator2.plus_8(num));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bluete);
