import React from "react";
import { Provider, connect } from "react-redux";
import {
  PermissionsAndroid,
  BackHandler,
  AsyncStorage,
  ToastAndroid
} from "react-native";
import ActionCreator from "../actions/index";
import ActionCreator2 from "../actions_2/index";
import initStore from "../store/index";

import BluetoothSerial from "react-native-bluetooth-serial-next";

import { Buffer } from "buffer";
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
          devices: temp.map(device => ({
            // chairCommunication 발견 했다면 devices에 넣어놓고
            // 객체 속성을 추가함(paired, connected)
            ...device,
            paired: true
          }))
        });
        // 찾은게 있다면 강제 커넥트
        await BluetoothSerial.connect(id);

        // catch에 걸리지 않으면
        // this.state.connected = true;
        global.connected = true;
        ToastAndroid.show("블루투스와 연결되었습니다", ToastAndroid.SHORT);

        let splitData = [];
        let vib = [];
        let back = [];
        let seat = [];
        let a, b, c;
        // 블루투스 모듈 연결이 성공했을 때
        BluetoothSerial.read((data, subscription) => {
          splitData = data.split(",");
          vib = splitData[2];
          angled = splitData[3];
          batteryd = splitData[4];
          global.vib = vib;
          backd = splitData[1].split("^");
          seat = splitData[0].split("^");
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
          this.props.backchange(
            a,
            b,
            c,
            parseInt(backd[3].substring(0, 3)),
            seat,
            angled,
            batteryd
          );

          var thigh = {
            left: [],
            right: [],
            middle: [],
            l_avg: 0,
            r_avg: 0,
            m_avg: 0
          };

          var calf = {
            left: [],
            right: [],
            l_avg: 0,
            r_avg: 0
          };

          var hip = {
            left: [],
            right: [],
            l_avg: 0,
            r_avg: 0
          };

          var back = {
            left: [],
            right: [],
            l_avg: 0,
            r_avg: 0
          };

          for (let i = 0; i < 6; i++) {
            thigh.left[i] = parseInt(seat[i + 6]);
            thigh.right[i] = parseInt(seat[i + 15]);
            if (i < 3) {
              thigh.middle[i] = parseInt(seat[i + 12]);
              thigh.m_avg += thigh.middle[i];
            }
            thigh.l_avg[i] += thigh.left[i];
            thigh.r_avg[i] += thigh.right[i];
          }

          thigh.l_avg /= 6;
          thigh.r_avg /= 6;

          for (let i = 0; i < 3; i++) {
            calf.left[i] = parseInt(seat[i]);
            calf.right[i] = parseInt(seat[i + 3]);
            calf.l_avg += calf.left[i];
            calf.r_avg += calf.right[i];
          }
          calf.l_avg /= 3;
          calf.r_avg /= 3;

          for (let i = 0; i < 5; i++) {
            hip.left[i] = parseInt(seat[i + 21]);
            hip.right[i] = parseInt(seat[i + 26]);

            hip.l_avg += hip.left[i];
            hip.r_avg += hip.right[i];
          }

          for (let i = 0; i < 2; i++) {
            back.left[i] = parseInt(backd[i]);
            back.right[i] = parseInt(backd[i + 2]);
            back.l_avg += back.left[i];
            back.r_avg += back.right[i];
          }

          back.r_avg /= 2;
          back.l_avg /= 2;

          if (
            calf.l_avg == 0 &&
            calf.r_avg == 0 &&
            hip.r_avg == 0 &&
            hip.l_avg == 0 &&
            back.l_avg == 0 &&
            back.r_avg == 0 &&
            thigh.l_avg == 0 &&
            thigh.r_avg == 0 &&
            thigh.m_avg == 0
          ) {
          }

          if (
            (calf.l_avg == 0 && calf.r_avg != 0) ||
            (calf.l_avg != 0 && calf.r_avg == 0)
          ) {
            //다리 꼬았는지 확인
            if (calf.l_avg == 0 && calf.r_avg != 0) {
              this.props.plus_1(1);
            } else {
              this.props.plus_2(1);
            }
          } else {
            if (hip.r_avg == 0 && hip.l_avg == 0) {
              this.props.plus_3(1);
            } else {
              if ((back.r_avg == 0) & (back.l_avg == 0)) {
                this.props.plus_4(1);
              } else {
                if (Math.abs(hip.l_avg - hip.r_avg) > 30) {
                  if (hip.l_avg > hip.r_avg) {
                    this.props.plus_5(1);
                  } else this.props.plus_6(1);
                } else {
                  if (thigh.m_avg < 21) this.props.plus_7(1);
                  else {
                    this.props.plus_8(1);
                  }
                }
              }
            }
          }
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
      setTimeout(function() {
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
    statData: state.statdata.statData
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
    plus_1: num => {
      dispatch(ActionCreator2.plus_1(num));
    },
    plus_2: num => {
      dispatch(ActionCreator2.plus_2(num));
    },
    plus_3: num => {
      dispatch(ActionCreator2.plus_3(num));
    },
    plus_4: num => {
      dispatch(ActionCreator2.plus_4(num));
    },
    plus_5: num => {
      dispatch(ActionCreator2.plus_5(num));
    },
    plus_6: num => {
      dispatch(ActionCreator2.plus_6(num));
    },
    plus_7: num => {
      dispatch(ActionCreator2.plus_7(num));
    },
    plus_8: num => {
      dispatch(ActionCreator2.plus_8(num));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bluete);
