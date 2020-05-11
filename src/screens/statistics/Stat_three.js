import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { PieChart, BarChart, XAxis } from "react-native-svg-charts";
import { Icon, ListItem, Card } from "react-native-elements";
import divCardStyle from "../../myStyles/divCardStyle";
import * as scale from "d3-scale";

import MyHeader from "../../components/MyHeader";

class Stat_three extends React.PureComponent {
  render() {
    let data = [
      {
        key: 1,
        value: 50,
        svg: { fill: "#600080" },
      },
      {
        key: 2,
        value: 50,
        svg: { fill: "#9900cc" },
      },
      {
        key: 3,
        value: 40,
        svg: { fill: "#c61aff" },
      },
      {
        key: 4,
        value: 95,
        svg: { fill: "#d966ff" },
      },
      {
        key: 5,
        value: 35,
        svg: { fill: "#ecb3ff" },
      },
      {
        key: 6,
        value: 30,
        svg: { fill: "#c55de8" },
      },
    ];

    data.sort((a, b) => b.value - a.value);
    data2 = data.slice(0, 5);
    let data3 = 0;
    for (i in data) {
      data3 += data[i].value;
    }
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Card containerStyle={divCardStyle.c}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 2 }}>
                  <PieChart
                    style={{ height: 280, width: 230 }}
                    outerRadius={"70%"}
                    innerRadius={10}
                    data={data}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  {data2.map((item, i) => (
                    <ListItem
                      key={i}
                      containerStyle={{
                        backgroundColor: View.backgroundColor,
                        height: 50,
                      }}
                      leftElement={
                        <Icon
                          name="circle"
                          color={item.svg.fill}
                          type="font-awesome"
                        ></Icon>
                      }
                      pad={0}
                      title={<Text>{item.key}.자세</Text>}
                    />
                  ))}
                </View>
              </View>
            </Card>
            <Card containerStyle={divCardStyle.c}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.te1}>총 사용시간 : {data3} 중</Text>
                <Text style={styles.te1}>바른 자세 : {data[0].value}</Text>
                <Text style={styles.te1}>걸터 앉기 : {data[1].value}</Text>
                <Text style={styles.te1}>둔부 앞 자세 : {data[2].value}</Text>

                <Text style={styles.te1}>왼다리 꼬기 : {data[3].value}</Text>
                <Text style={styles.te1}>오른다리 꼬기 : {data[4].value}</Text>
                <Text style={styles.te1}>숙인 자세 : {data[5].value}</Text>
              </View>
            </Card>
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
    alignItems: "center",
  },
  te1: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Stat_three;
