import React from "react";
import { Tabs } from "./navigations/Root";
import { Provider } from "react-redux";
import MyStatusBar from "./components/StatusBar";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

class Start extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs></Tabs>
      </Provider>
    );
  }
}

export default Start;
