import React from "react";
import { BackHandler, AppState } from "react-native";
import { RootNav } from "./navigations/Root";
import { Provider, connect } from "react-redux";
import MyStatusBar from "./components/StatusBar";
import Bluete from "./components/Bluete";
import initStore from "./store/index";

const store = initStore();

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.events = null;
    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === "active") {
      console.log("App has come to the foreground!");
    }
    this.setState({ appState: nextAppState });
  };

  handleBackPress() {
    return true;
  }

  render() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
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
