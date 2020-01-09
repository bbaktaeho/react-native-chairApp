import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import { Path } from "react-native-svg";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

export default class Home_three extends React.PureComponent {
  render() {
    const data = [
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
        <MyHeader navigation={this.props.navigation} title="차트"></MyHeader>

        <Card>
          <AreaChart
            style={{ height: 200 }}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: "rgba(134, 65, 244, 0.2)" }}
          >
            <Grid />
            <Line />
          </AreaChart>
        </Card>
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
