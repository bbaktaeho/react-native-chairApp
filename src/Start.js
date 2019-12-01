import React from "react";
import { View, StatusBar } from "react-native";

import { Tabs } from "./navigations/Root";

class Start extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={"transparent"}
        ></StatusBar>
        <Tabs></Tabs>
      </React.Fragment>
    );
  }
}

export default Start;
