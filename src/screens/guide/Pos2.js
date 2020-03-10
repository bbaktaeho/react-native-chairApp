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
    thigh.left[0] = seatData[6].data;
    thigh.left[1] = seatData[7].data;
    thigh.left[2] = seatData[8].data;
    thigh.left[3] = seatData[9].data;
    thigh.left[4] = seatData[10].data;
    thigh.left[5] = seatData[11].data;

    thigh.m_avg[0] = seatData[12].data;
    thigh.m_avg[1] = seatData[13].data;
    thigh.m_avg[2] = seatData[14].data;

    thigh.right[0] = seatData[15].data;
    thigh.right[1] = seatData[16].data;
    thigh.right[2] = seatData[17].data;
    thigh.right[3] = seatData[18].data;
    thigh.right[4] = seatData[19].data;
    thigh.right[5] = seatData[20].data;

    for (let i = 0; i < 6; i++) {
      thigh.l_avg[i] += thigh.left[i];
      thigh.r_avg[i] += thigh.right[i];
      if (i < 3) thigh.m_avg[i] = +thigh.middle[i];
    }

    thigh.l_avg /= 6;
    thigh.r_avg /= 6;

    var calf = {
      left: [],
      right: [],
      l_avg: 0,
      r_avg: 0
    };
    calf.left[0] = seatData[0].data;
    calf.left[1] = seatData[1].data;
    calf.left[2] = seatData[2].data;

    calf.right[0] = seatData[3].data;
    calf.right[1] = seatData[4].data;
    calf.right[2] = seatData[5].data;

    var hip = {
      left: [],
      right: [],
      l_avg: 0,
      r_avg: 0
    };
    for (let i = 0; i < 3; i++) {
      calf.l_avg += calf.left[i];
      calf.r_avg += calf.right[i];
    }
    calf.l_avg /= 3;
    calf.r_avg /= 3;

    hip.left[0] = seatData[21].data;
    hip.left[1] = seatData[22].data;
    hip.left[2] = seatData[23].data;
    hip.left[3] = seatData[24].data;
    hip.left[4] = seatData[25].data;

    hip.right[0] = seatData[26].data;
    hip.right[1] = seatData[27].data;
    hip.right[2] = seatData[28].data;
    hip.right[3] = seatData[29].data;
    hip.right[4] = seatData[30].data;

    for (let i = 0; i < 5; i++) {
      hip.r_avg += hip.right[i];
      hip.l_avg += hip.left[i];
    }

    hip.r_avg /= 5;
    hip.l_avg /= 5;

    var back = {
      left: [],
      right: [],
      l_avg: 0,
      r_avg: 0
    };

    back.left[0] = backData[0].data;
    back.left[1] = backData[1].data;
    back.right[0] = backData[2].data;
    back.right[1] = backData[3].data;

    for (let i = 0; i < 2; i++) {
      back.r_avg += back.right[i];
      back.l_avg += back.left[i];
    }

    back.r_avg /= 2;
    back.l_avg /= 2;

    var result = () => {
      if (
        calf.l_avg == 0 &&
        calf.r_avg == 0 &&
        hip.l_avg == 0 &&
        hip.r_avg == 0 &&
        back.l_avg == 0 &&
        back.r_avg == 0
      ) {
        return "앉지 않았습니다";
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
          //엉덩이 압력 0
          return "엉덩이를 앞으로 내밀었습니다 (p3)";
        } else {
          if (back.r_avg == 0 && back.l_avg == 0) {
            return "상체를 숙였습니다";
          } else if (
            Math.abs(hip.l_avg - hip.r_avg) > 40 //||
            // Math.abs(back.l_avg - back.r_avg) > 24
          ) {
            if (hip.l_avg > hip.r_avg) {
              //|| back.l_avg > back.r_avg) {
              return "왼쪽으로 치우쳤습니다(p5)";
            } else return "오른쪽으로 치우쳤습니다(p6)";
          } else if (thigh.m_avg < 21) {
            return "두 발을 모두 바닥에 붙이세요";
          } else {
            return "올바른 자세입니다 (p7)";
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
