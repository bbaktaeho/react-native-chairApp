import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  ScrollView,
  Image,
  AsyncStorage
} from "react-native";

import MyHeader from "../../components/MyHeader";

class Stat_one extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <ScrollView>
          <View style={styles.container}></View>
        </ScrollView>
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

export default Stat_one;
