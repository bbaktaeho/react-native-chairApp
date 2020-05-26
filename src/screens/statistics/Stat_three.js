import React from "react";
import { View, StyleSheet, ScrollView, AsyncStorage } from "react-native";
import {
  PieChart,
  Grid,
  LineChart,
  XAxis,
  YAxis,
} from "react-native-svg-charts";

import { Icon, ListItem, Text, Card } from "react-native-elements";
import divCardStyle from "../../myStyles/divCardStyle";

import Fetch from "../../components/Fetch";
import URL from "../../NET";
import MyHeader from "../../components/MyHeader";
import StatisticsEx from "../../components/StatisticsEx";
import PostureEx from "../../components/PostureEx";
import MyDivider from "../../components/MyDivider";

class Stat_three extends React.PureComponent {
  state = {
    dataset: [1, 1, 1, 1, 1, 1],
    lineChartDataset: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    allTime: "",
  };

  async getStatistics() {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    const resData = await Fetch(URL.statisticall, "GET", null, token);
    const res = JSON.parse(resData._bodyInit);
    const comparisonData = await Fetch(
      URL.statisticallComparison,
      "GET",
      null,
      token
    );
    const resComparison = JSON.parse(comparisonData._bodyInit);

    if (res.success && resComparison.success) {
      let statistics = [];
      let comparisonStatistics = [];
      res.statistics.forEach((element) => {
        statistics.push(parseInt(element));
      });
      resComparison.statistics.forEach((e) => {
        comparisonStatistics.push(parseInt(e));
      });
      this.setState({
        dataset: statistics,
        allTime: res.time,
        lineChartDataset: comparisonStatistics,
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

  async componentWillMount() {
    await this.getStatistics();
  }

  render() {
    const { dataset, lineChartDataset, allTime } = this.state;
    let data = dataset.map((e, i) => ({
      key: `pie-${i}`,
      value: e,
      svg: { fill: this.pieColor(i) },
    }));
    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;
    const lineYdata = lineChartDataset.map((e, i) => e / 60);
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MyHeader navigation={this.props.navigation} title="총 통계"></MyHeader>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View>
              <MyDivider title="총 자세 그래프" />
            </View>

            <Card containerStyle={divCardStyle.c}>
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

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="총 자세 비교" />
            </View>

            <Card containerStyle={divCardStyle.c}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                2020년
              </Text>

              <View
                style={{
                  height: 240,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 5,
                  paddingRight: 5,
                  flexDirection: "row",
                }}
              >
                <YAxis
                  data={lineYdata}
                  style={{ marginBottom: 30 }}
                  contentInset={verticalContentInset}
                  svg={{ fontSize: 9, fill: "gray" }}
                  formatLabel={(value) => `  ${value}분  `}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <LineChart
                    style={{ flex: 1 }}
                    data={lineYdata}
                    contentInset={verticalContentInset}
                    svg={{ stroke: "rgb(134, 65, 244)" }}
                  >
                    <Grid />
                  </LineChart>
                  <XAxis
                    style={{
                      marginHorizontal: -10,
                      height: xAxisHeight,
                    }}
                    data={lineYdata}
                    formatLabel={(value, index) => index + 1}
                    contentInset={{ left: 10, right: 30 }}
                    svg={{ fontSize: 10, fill: "gray" }}
                  />
                </View>
              </View>
            </Card>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="총 자세 요약" />
            </View>
            <Card containerStyle={divCardStyle.c}>
              <PostureEx p={dataset}></PostureEx>
            </Card>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="총 자세 분석" />
            </View>
            <Card containerStyle={divCardStyle.c}>
              <StatisticsEx p={dataset}></StatisticsEx>
            </Card>
          </View>
          <View style={{ marginTop: 20 }}></View>
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
