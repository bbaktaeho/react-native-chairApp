import React from "react";
import { RootNav } from "./navigations/Root";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import MyStatusBar from "./components/StatusBar";

const store = createStore(rootReducer);

class Start extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyStatusBar></MyStatusBar>
        <RootNav></RootNav>
      </Provider>
    );
  }
}

export default Start;
