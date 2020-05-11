import React from "react";
import { View, StyleSheet, Text, ScrollView, AsyncStorage } from "react-native";
import { PieChart, BarChart, XAxis } from "react-native-svg-charts";
import { Icon, ListItem, Card } from "react-native-elements";
import divCardStyle from "../../myStyles/divCardStyle";

import Fetch from "../../components/Fetch";
import URL from "../../NET";
import MyHeader from "../../components/MyHeader";

class Stat_three extends React.Component {
  state = {
    p0: 1,
    p1: 1,
    p2: 1,
    p3: 1,
    p4: 1,
    p5: 1,
    allTime: "",
  };

  async getStatistics() {
    const token = await AsyncStorage.getItem("token");
    const resData = await Fetch(URL.statisticall, "GET", null, token);
    const res = JSON.parse(resData._bodyInit);

    if (res.success) {
      let statistics = [];
      res.statistics.forEach((element) => {
        statistics.push(parseInt(element));
      });
      this.setState({
        p0: statistics[0],
        p1: statistics[1],
        p2: statistics[2],
        p3: statistics[3],
        p4: statistics[4],
        p5: statistics[5],
        allTime: res.time,
      });
    } else {
      // 불러온 데이터가 없을 때 처리하기
    }
  }

  async componentDidMount() {
    await this.getStatistics();
  }

  render() {
    const { p0, p1, p2, p3, p4, p5, allTime } = this.state;
    let data = [
      {
        key: 1,
        value: p0,
        svg: { fill: "#600080" },
        p: "p0",
      },
      {
        key: 2,
        value: p1,
        svg: { fill: "#9900cc" },
        p: "p1",
      },
      {
        key: 3,
        value: p2,
        svg: { fill: "#c61aff" },
        p: "p2",
      },
      {
        key: 4,
        value: p3,
        svg: { fill: "#d966ff" },
        p: "p3",
      },
      {
        key: 5,
        value: p4,
        svg: { fill: "#ecb3ff" },
        p: "p4",
      },
      {
        key: 6,
        value: p5,
        svg: { fill: "#c55de8" },
        p: "p5",
      },
    ];

    // data.sort((a, b) => b.value - a.value);
    // data2 = data.slice(0, 5);
    // let data3 = 0;
    // for (i in data) {
    //   data3 += data[i].value;
    // }
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="총 통계"></MyHeader>
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
                  {data.map((item, i) => (
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
                      title={<Text> {item.p}</Text>}
                    />
                  ))}
                </View>
              </View>
            </Card>
            <Card containerStyle={divCardStyle.c}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={styles.te1}>총 사용시간 : {allTime}</Text>
                <Text style={styles.te1}>바른 자세 : {data[0].value}</Text>
                <Text style={styles.te1}>걸터 앉기 : {data[1].value}</Text>
                <Text style={styles.te1}>
                  왼쪽으로 기울어짐 : {data[2].value}
                </Text>

                <Text style={styles.te1}>
                  오른쪽으로 기울어짐 : {data[3].value}
                </Text>
                <Text style={styles.te1}>둔부 앞 자세 : {data[4].value}</Text>
                <Text style={styles.te1}>허리숙인 자세 : {data[5].value}</Text>
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
