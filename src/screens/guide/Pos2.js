import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage
} from "react-native";

import { Provider, connect } from "react-redux";
import ActionCreator from "../../actions/index.js";

class Pos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backData, seatData } = this.props;

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
      thigh.left[i] = parseInt(seatData[i + 6].data);
      thigh.right[i] = parseInt(seatData[i + 15].data);
      if (i < 3) {
        thigh.middle[i] = parseInt(seatData[i + 12].data);
        thigh.m_avg += thigh.middle[i];
      }
      thigh.l_avg[i] += thigh.left[i];
      thigh.r_avg[i] += thigh.right[i];
    }

    thigh.l_avg /= 6;
    thigh.r_avg /= 6;

    for (let i = 0; i < 3; i++) {
      calf.left[i] = parseInt(seatData[i].data);
      calf.right[i] = parseInt(seatData[i + 3].data);
      calf.l_avg += calf.left[i];
      calf.r_avg += calf.right[i];
    }
    calf.l_avg /= 3;
    calf.r_avg /= 3;

    for (let i = 0; i < 5; i++) {
      hip.left[i] = parseInt(seatData[i + 21].data);
      hip.right[i] = parseInt(seatData[i + 26].data);

      hip.l_avg += hip.left[i];
      hip.r_avg += hip.right[i];
    }

    for (let i = 0; i < 2; i++) {
      back.left[i] = parseInt(backData[i].data);
      back.right[i] = parseInt(backData[i + 2].data);
      back.l_avg += back.left[i];
      back.r_avg += back.right[i];
    }

    back.r_avg /= 2;
    back.l_avg /= 2;

    var result = () => {
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
        return "의자에 앉지 않았습니다(p0)";
      }
      if (
        (calf.l_avg == 0 && calf.r_avg != 0) ||
        (calf.l_avg != 0 && calf.r_avg == 0)
      ) {
        //다리 꼬았는지 확인

        if (calf.l_avg == 0 && calf.r_avg != 0) {
          return "왼쪽 다리를 꼬았습니다 (p1)";
        } else {
          return "오른쪽 다리를 꼬았습니다 (p2)";
        }
      } else {
        if (hip.r_avg == 0 && hip.l_avg == 0) {
          return "엉덩이를 앞으로 내밀었습니다 (p3)";
        } else {
          if (back.r_avg == 0 && back.l_avg == 0) {
            return "상체를 숙였습니다 (p4)";
          } else {
            console.log(Math.abs(hip.l_avg - hip.r_avg));

            if (Math.abs(hip.l_avg - hip.r_avg) > 30) {
              if (hip.l_avg > hip.r_avg) {
                return "왼쪽으로 치우쳤습니다(p5)";
              } else return "오른쪽으로 치우쳤습니다(p6)";
            } else {
              if (thigh.m_avg < 21) return "두 발을 모두 바닥에 붙이세요(p7)";
              else {
                return "올바른 자세입니다 (p8)";
              }
            }
          }
        }
      }
    };
    return (
      <View>
        <Text>{result()}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (da, da2, da3, da4, da5) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pos2);
