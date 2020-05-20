import React, { Component } from "react";
import { View } from "react-native";
import MyHeader from "../../components/MyHeader";
import { connect } from "react-redux";
import Pos from "../../screens/guide/Pos.js";
import ActionCreator from "../../actions/index.js";

class Home_two extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    return 255 - ((x - 0) * (255 - 0)) / (1000 - 0) + 0;
  }
  0;

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader
          navigation={this.props.navigation}
          title="실시간 의자"
        ></MyHeader>
        <Pos></Pos>
        <View style={{ marginTop: 20 }}></View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (da, da2, da3, da4, da5) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_two);
