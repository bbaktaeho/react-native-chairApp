import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";

import MyHeader from "../../components/MyHeader";
import {
  PieChart,
  AreaChart,
  Grid,
  StackedAreaChart,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Picker, DatePicker } from "react-native-wheel-pick";

class Stat_one extends Component {
  state = {
    date: "",
    selectdate: ""
  };

  render() {
    const data1 = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];
    const Line = ({ line }) => (
      <Path key={"line"} d={line} stroke={"rgb(134, 65, 244)"} fill={"none"} />
    );

    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>

        <ScrollView>
          <View style={styles.container}>
            <DatePicker
              date={new Date("2017-08-18")}
              minimumDate={new Date("2017-01-01")}
              maximumDate={new Date("2020-12-31")}
              style={{
                backgroundColor: "white",
                height: 200
              }}
              onDateChange={date => {}}
            />
            <AreaChart
              style={{ height: 200 }}
              data={data1}
              contentInset={{ top: 30, bottom: 30 }}
              curve={shape.curveNatural}
              svg={{ fill: "rgba(134, 65, 244, 0.2)" }}
            >
              <Grid />
              <Line />
            </AreaChart>
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

export default Stat_one;
