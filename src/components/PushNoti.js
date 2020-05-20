import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ActionCreator2 from "../actions_2/index";
import Push from "../utils/localPushNotification";

const PushNoti = ({ p }) => {
  Push();
  return <View></View>;
};

function mapStateToProps(state) {
  return {
    statData: state.statdata.statData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
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
    pos_0: (num) => {
      dispatch(ActionCreator2.pos_0(num));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNoti);
