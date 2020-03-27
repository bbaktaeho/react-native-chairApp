import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Picker, Text } from "react-native";

import MyHeader from "../../components/MyHeader";
import { BarChart, XAxis, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

class Stat_two extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      num: 0,
      year: "",
      month: ""
    };
  }

  render() {
    const data = [
      { pos: "바른자세", val: 20 },
      { pos: "둔부앞자세", val: 50 },
      { pos: "숙인자세", val: 30 },
      { pos: "왼다리꼬기", val: 80 },
      { pos: "오른다리꼬기", val: 10 },
      { pos: "오른쪽기울기", val: 0 },
      { pos: "왼쪽기울기", val: 60 },
      { pos: "걸터앉기", val: 50 },
      { pos: "양반다리", val: 30 }
    ];
    const da2 = [80, 70, 60, 50, 40, 30, 20, 10, 0];

    data.sort((a, b) => b.val - a.val);

    const { year, month } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <ScrollView>
          <View>
            <View style={styles.pickContainer}>
              <Picker
                selectedValue={year}
                style={{ height: 50, width: 103, color: "#CEAEA7" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ year: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="2017" value="2017" />
                <Picker.Item label="2018" value="2018" />
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
              </Picker>
              <Text style={{ fontWeight: "bold" }}>년 </Text>

              <Picker
                selectedValue={month}
                style={{
                  height: 50,
                  width: 75,
                  color: "#CEAEA7"
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ month: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
              <Text style={{ fontWeight: "bold" }}>월 </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <YAxis
                data={data}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                formatLabel={(_, index) => da2[index]}
              />
            </View>
            <View style={{ flex: 9, paddingRight: 20 }}>
              <BarChart
                style={{ height: 400 }}
                data={data}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                yAccessor={({ item }) => item.val}
                svg={{ fill: "#eabefa" }}
              ></BarChart>
              <XAxis
                data={data}
                scale={scale.scaleBand}
                formatLabel={(_, index) => data[index].pos}
                labelStyle={{ color: "black" }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  pickContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Stat_two;
