import React from "react";
import { RootNav } from "./navigations/Root";
import { Provider, connect } from "react-redux";
import MyStatusBar from "./components/StatusBar";
import Bluete from "./components/Bluete";
import { PermissionsAndroid, BackHandler, AsyncStorage } from "react-native";
import ActionCreator from "./actions/index";
import initStore from "./store/index";

import BluetoothSerial from "react-native-bluetooth-serial-next";
const store = initStore();

import { Buffer } from "buffer";
class Start extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <MyStatusBar></MyStatusBar>
        <Bluete></Bluete>
        <RootNav></RootNav>
      </Provider>
    );
  }
}
export default Start;
