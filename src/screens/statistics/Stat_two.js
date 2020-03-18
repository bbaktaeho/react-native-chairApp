import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import MyHeader from "../../components/MyHeader";
import { Picker, DatePicker } from "react-native-wheel-pick";
import { BarChart, XAxis, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

class Stat_two extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      num: 0
    };
  }

  render() {
    const data = [
      { pos: "1번자세", val: 20 },
      { pos: "2번자세", val: 50 },
      { pos: "3번자세", val: 30 },
      { pos: "4번자세", val: 70 },
      { pos: "5번자세", val: 10 },
      { pos: "6번자세", val: 0 },
      { pos: "7번자세", val: 60 },
      { pos: "8번자세", val: 50 }
    ];
    const da2 = [70, 60, 50, 40, 30, 20, 10, ""];
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
                style={{ height: 200 }}
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
  }
});

export default Stat_two;
