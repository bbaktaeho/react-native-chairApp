import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Slider, ListItem } from "react-native-elements";

import BluetoothSerial from "react-native-bluetooth-serial-next";
import MyHeader from "../../components/MyHeader";
export default class Vibrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      num: 0
    };
  }

  vibSwitchOn = () => {
    if (this.state.isHidden == false) this.setState({ isHidden: true });
    else this.setState({ isHidden: false });

    this.setState({ num: parseInt(global.vib) });
  };

  setVib = () => {
    let vv;
    vv = parseInt(this.state.num);
    global.vib = vv;
    BluetoothSerial.write(vv.toString());
  };

  render() {
    let num = this.state;
    return (
      <View>
        <MyHeader
          navigation={this.props.navigation}
          title="진동 설정"
          type="setting"
        ></MyHeader>
        <View>
          <ListItem
            title="의자 진동"
            bottomDivider
            rightElement={
              <Switch
                onValueChange={this.vibSwitchOn}
                value={this.state.isHidden}
              />
            }
          />
        </View>
        {this.state.isHidden ? (
          <View>
            <ListItem
              title="진동 세기 조절"
              bottomDivider
              rightTitle={<Text>{parseInt(this.state.num)}%</Text>}
            />
          </View>
        ) : null}
        {this.state.isHidden ? (
          <View
            style={{
              alignItems: "stretch",
              justifyContent: "center",
              margin: 20
            }}
          >
            <Slider
              minimumValue={0}
              minimumTrackTintColor="#98e3fa"
              maximumValue={100}
              thumbTintColor="#bfe8f5"
              value={this.state.num}
              onValueChange={num => this.setState({ num })}
              onSlidingComplete={this.setVib}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
