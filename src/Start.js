import React from "react";
import { Tabs } from "./navigations/Root";
import MyStatusBar from "./components/StatusBar";
class Start extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MyStatusBar></MyStatusBar>
        <Tabs></Tabs>
      </React.Fragment>
    );
  }
}

export default Start;
