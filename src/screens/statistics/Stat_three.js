import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Path } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";
import { Icon, ListItem, Divider } from "react-native-elements";

import * as shape from "d3-shape";

import MyHeader from "../../components/MyHeader";

class Stat_three extends React.PureComponent {
  render() {
    let data = [
      {
        key: 1,
        value: 50,
        svg: { fill: "#600080" }
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
      },
      {
        key: 6,
        value: 30,
        svg: { fill: "#c55de8" }
      },
      {
        key: 7,
        value: 60,
        svg: { fill: "#d4a1e6" }
      },
      {
        key: 8,
        value: 10,
        svg: { fill: "#eabefa" }
      }
    ];

    data.sort((a, b) => b.value - a.value);

    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            marginTop: 100
          }}
        >
          <View style={{ flex: 2 }}>
            <PieChart
              style={{ height: 300, width: 300 }}
              outerRadius={"70%"}
              innerRadius={10}
              data={data}
            />
          </View>
          <View style={{ flex: 1 }}>
            <ListItem
              leftElement={
                <Icon
                  name="circle"
                  color={data[0].svg.fill}
                  type="font-awesome"
                ></Icon>
              }
              title={<Text>1번 자세</Text>}
            />
            <ListItem
              leftElement={
                <Icon
                  name="circle"
                  color={data[1].svg.fill}
                  type="font-awesome"
                ></Icon>
              }
              title={<Text>2번 자세</Text>}
            />
            <ListItem
              leftElement={
                <Icon
                  name="circle"
                  color={data[2].svg.fill}
                  type="font-awesome"
                ></Icon>
              }
              title={<Text>3번 자세</Text>}
            />
            <ListItem
              leftElement={
                <Icon
                  name="circle"
                  color={data[3].svg.fill}
                  type="font-awesome"
                ></Icon>
              }
              title={<Text>4번 자세</Text>}
            />
            <ListItem
              leftElement={
                <Icon
                  name="circle"
                  color={data[4].svg.fill}
                  type="font-awesome"
                ></Icon>
              }
              title={<Text>5번 자세</Text>}
            />
          </View>
        </View>
        <View style={{ flex: 3, paddingLeft: 50 }}>
          <Text>총 사용시간 : </Text>
          <Text>바른 자세 : </Text>
          <Text>바르지 않은 자세 : </Text>
        </View>
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

export default Stat_three;
