import React, { Component } from "react";
import { View, Text } from "react-native";

import { Provider, connect } from "react-redux";
import ActionCreator from "../../actions/index.js";
import ActionCreator2 from "../../actions_2/index.js";
import initStore from "../../store/index";

class Pos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backData, seatData, statData } = this.props;
    const store = initStore();
    return (
      <View>
        <Text>{statData.pos}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
    statData: state.statdata.statData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    plus_1: (num) => {
      dispatch(ActionCreator2.plus_1(num));
    },
    backchange: (da, da2, da3, da4, da5) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pos2);
