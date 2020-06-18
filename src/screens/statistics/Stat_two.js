import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  AsyncStorage,
} from "react-native";

import { Card, Button } from "react-native-elements";
import { BarChart } from "react-native-chart-kit";
import divCardStyle from "../../myStyles/divCardStyle";

import Fetch from "../../components/Fetch";
import URL from "../../NET";
import MyHeader from "../../components/MyHeader";
import moment from "moment";
import PostureEx from "../../components/PostureEx";
import StatisticsEx from "../../components/StatisticsEx";
import MyDivider from "../../components/MyDivider";

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default class Stat_one extends Component {
  state = {
    year: "",
    month: "",
    dataset: [0, 0, 0, 0, 0, 0],
  };
  componentWillMount() {
    const yesterday = moment().subtract(1, "day");
    this.setState({
      year: yesterday.get("year").toString(),
      month: (yesterday.get("month") + 1).toString(),
    });
  }

  async getStatistics() {
    let { year, month } = this.state;
    if (month.length == 1) month = "0" + month;
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    const resData = await Fetch(
      URL.statisticmonth + `?date=${year}-${month}-01`,
      "GET",
      null,
      token
    );
    const res = JSON.parse(resData._bodyInit);
    if (res.success) {
      let statistics = [];
      res.statistics.forEach((element) => {
        statistics.push(parseInt(element));
      });
      this.setState({ dataset: statistics });
    } else {
      // 불러온 데이터가 없을 때 처리하기
    }
  }

  render() {
    const { year, month, dataset } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MyHeader
          navigation={this.props.navigation}
          title="월간 통계"
        ></MyHeader>

        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Card containerStyle={divCardStyle.c}>
              <View style={styles.container}>
                <View style={styles.pickContainer}>
                  <Picker
                    selectedValue={year}
                    style={{ height: 50, width: 105, color: "#ABA095" }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ year: itemValue })
                    }
                    mode="dialog"
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
                      color: "#ABA095",
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ month: itemValue })
                    }
                    mode="dialog"
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
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Button
                  buttonStyle={{ backgroundColor: "#ABA095" }}
                  containerStyle={{
                    borderRadius: 5,
                    width: "100%",
                    marginTop: 9,
                  }}
                  title="통계 보기"
                  onPress={() => this.getStatistics()}
                ></Button>
              </View>
            </Card>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="자세 그래프" />
            </View>

            <Card containerStyle={divCardStyle.c}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BarChart
                  data={{
                    labels: ["p0", "p1", "p2", "p3", "p4", "p5"],
                    datasets: [{ data: dataset }],
                  }}
                  width={350}
                  height={350}
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                />
              </View>
            </Card>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="자세 요약" />
            </View>

            <Card containerStyle={divCardStyle.c}>
              <PostureEx p={dataset}></PostureEx>
            </Card>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="자세 분석" />
            </View>

            <Card containerStyle={divCardStyle.c}>
              <StatisticsEx p={dataset}></StatisticsEx>
            </Card>
            <View style={{ marginTop: 20 }}></View>
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
  pickContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
