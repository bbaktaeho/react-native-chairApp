import React from "react";
import { View, StyleSheet, ScrollView, AsyncStorage } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Circle, G, Line } from "react-native-svg";
import { Icon, ListItem, Text, Card } from "react-native-elements";
import divCardStyle from "../../myStyles/divCardStyle";

import Fetch from "../../components/Fetch";
import URL from "../../NET";
import MyHeader from "../../components/MyHeader";
import StatisticsEx from "../../components/StatisticsEx";
import PostureEx from "../../components/PostureEx";

class Stat_three extends React.PureComponent {
  state = {
    dataset: [1, 1, 1, 1, 1, 1],
    allTime: "",
  };

  async getStatistics() {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    const resData = await Fetch(URL.statisticall, "GET", null, token);
    const res = JSON.parse(resData._bodyInit);

    if (res.success) {
      let statistics = [];
      res.statistics.forEach((element) => {
        statistics.push(parseInt(element));
      });
      this.setState({
        dataset: statistics,
        allTime: res.time,
      });
    } else {
      // 불러온 데이터가 없을 때 처리하기
    }
  }

  pieColor(pNum) {
    switch (pNum) {
      case 0:
        return "#F78181"; // 바른자세
      case 1:
        return "#F7BE81"; // 걸터앉은자세
      case 2:
        return "#F3F781"; // 왼쪽으로 기울어진 자세
      case 3:
        return "#81F781"; // 오른쪽으로 기울어진 자세
      case 4:
        return "#81DAF5"; // 둔부 앞 자세
      case 5:
        return "#8181F7"; // 숙인 자세
    }
  }

  async componentDidMount() {
    await this.getStatistics();
  }

  render() {
    const { dataset, allTime } = this.state;
    let data = dataset.map((e, i) => ({
      key: `pie-${i}`,
      value: e,
      svg: { fill: this.pieColor(i) },
    }));
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="총 통계"></MyHeader>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Card containerStyle={divCardStyle.c} title="차트">
              <View style={styles.chartContainer}>
                <View style={{ flex: 3 }}>
                  <PieChart
                    style={{
                      height: 240,
                    }}
                    outerRadius={"70%"}
                    innerRadius={10}
                    data={data}
                  ></PieChart>
                </View>
                <View style={{ flex: 1 }}>
                  {data.map((item, i) => (
                    <ListItem
                      key={i}
                      containerStyle={{
                        height: 40,
                      }}
                      leftElement={
                        <Icon
                          name="circle"
                          color={item.svg.fill}
                          type="font-awesome"
                        />
                      }
                      pad={0}
                      title={`  P${i}`}
                      titleStyle={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    />
                  ))}
                </View>
              </View>
            </Card>
            <Card containerStyle={divCardStyle.c} title="기본 정보">
              <StatisticsEx p={dataset}></StatisticsEx>
            </Card>
            <Card containerStyle={divCardStyle.c} title="자세 정보">
              <PostureEx p={dataset}></PostureEx>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Stat_three;
