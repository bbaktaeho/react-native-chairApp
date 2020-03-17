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
import { Picker, DatePicker } from "react-native-wheel-pick";

class Stat_two extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Picker
              style={{ backgroundColor: "white", width: 300, height: 215 }}
              selectedValue="January"
              pickerData={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]}
              onValueChange={value => {}}
              itemSpace={30} // this only support in android
            />
          </View>
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

export default Stat_two;
