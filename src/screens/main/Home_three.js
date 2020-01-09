import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import { Path } from "react-native-svg";
import {
  PieChart,
  AreaChart,
  Grid,
  StackedAreaChart,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";

export default class Home_three extends React.PureComponent {
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

    const data2 = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400
      }
    ];
    const data3 = [
      {
        key: 1,
        value: 50,
        svg: { fill: "#600080" },
        arc: { outerRadius: "130%", cornerRadius: 10 }
      },
      {
        key: 2,
        value: 50,
        svg: { fill: "#9900cc" }
      },
      {
        key: 3,
        value: 40,
        svg: { fill: "#c61aff" }
      },
      {
        key: 4,
        value: 95,
        svg: { fill: "#d966ff" }
      },
      {
        key: 5,
        value: 35,
        svg: { fill: "#ecb3ff" }
      }
    ];

    const colors2 = [
      "rgb(138, 0, 230, 0.8)",
      "rgb(173, 51, 255, 0.8)",
      "rgb(194, 102, 255, 0.8)",
      "rgb(214, 153, 255, 0.8)"
    ];
    const keys2 = ["apples", "bananas", "cherries", "dates"];

    const Line = ({ line }) => (
      <Path key={"line"} d={line} stroke={"rgb(134, 65, 244)"} fill={"none"} />
    );
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="차트"></MyHeader>

        <ScrollView>
          <Card>
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
          </Card>
          <Card>
            <View style={{ flexDirection: "row", height: 200 }}>
              <StackedAreaChart
                style={{ flex: 1 }}
                contentInset={{ top: 10, bottom: 10 }}
                data={data2}
                keys={keys2}
                colors={colors2}
                curve={shape.curveNatural}
              >
                <Grid />
              </StackedAreaChart>
              <YAxis
                style={{ position: "absolute", top: 0, bottom: 0 }}
                data={StackedAreaChart.extractDataPoints(data2, keys2)}
                contentInset={{ top: 10, bottom: 10 }}
                svg={{
                  fontSize: 8,
                  fill: "white",
                  stroke: "black",
                  strokeWidth: 0.1,
                  alignmentBaseline: "baseline",
                  baselineShift: "3"
                }}
              />
            </View>
          </Card>
          <Card>
            <PieChart
              style={{ height: 200 }}
              outerRadius={"70%"}
              innerRadius={10}
              data={data3}
            />
          </Card>
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
