import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage
} from "react-native";
import { Card, Button } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import { Provider, connect } from "react-redux";
import Pos from "../../screens/guide/Pos.js";
import initStore from "../../store/index.js";
import ActionCreator from "../../actions/index.js";

const store = initStore();

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
        <MyHeader navigation={this.props.navigation} title="센서"></MyHeader>
        <Pos></Pos>
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
    backchange: (da, da2, da3, da4, da5) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_two);
