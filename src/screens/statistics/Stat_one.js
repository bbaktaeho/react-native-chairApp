import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  AsyncStorage,
} from "react-native";

import { connect } from "react-redux";
import { Card, Button, Overlay, Divider } from "react-native-elements";
import { BarChart } from "react-native-chart-kit";
import divCardStyle from "../../myStyles/divCardStyle";

import Fetch from "../../components/Fetch";
import URL from "../../NET";
import MyHeader from "../../components/MyHeader";
import moment from "moment";
import PostureEx from "../../components/PostureEx";
import StatisticsEx from "../../components/StatisticsEx";
import MyDivider from "../../components/MyDivider";
import MyButton from "../../components/MyButton";

/* 날짜 바꾸면 post로 날짜 보내고 p0-p5받아서 state.data에 setState
   로그인 안하면 안나옴
*/

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

class Stat_one extends Component {
  state = {
    year: "",
    month: "",
    date: "",
    dataset: [0, 0, 0, 0, 0, 0],
    view: "",
  };
  async componentWillMount() {
    const yesterday = moment().subtract(1, "day");
    this.setState({
      year: yesterday.get("year").toString(),
      month: (yesterday.get("month") + 1).toString(),
      date: yesterday.get("date").toString(),
    });

    const token = await AsyncStorage.getItem("token");
    if (token == null) this.setState({ view: "unlogin" });
    else this.setState({ view: "login" });
  }

  async getStatistics() {
    let { year, month, date } = this.state;
    if (month.length == 1) month = "0" + month;
    if (date.length == 1) date = "0" + date;
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    const resData = await Fetch(
      URL.statisticdate + `?date=${year}-${month}-${date}`,
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
    const { year, month, date, dataset } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MyHeader
          navigation={this.props.navigation}
          title="일간 통계"
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
                    onValueChange={(itemValue) =>
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
                    onValueChange={(itemValue) =>
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
                  <Picker
                    selectedValue={date}
                    style={{
                      height: 50,
                      width: 100,
                      color: "#ABA095",
                      alignItems: "flex-end",
                    }}
                    onValueChange={(itemValue) =>
                      this.setState({ date: itemValue })
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
                    <Picker.Item label="13" value="13" />
                    <Picker.Item label="14" value="14" />
                    <Picker.Item label="15" value="15" />
                    <Picker.Item label="16" value="16" />
                    <Picker.Item label="17" value="17" />
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="19" value="19" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="21" value="21" />
                    <Picker.Item label="22" value="22" />
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="26" value="26" />
                    <Picker.Item label="27" value="27" />
                    <Picker.Item label="28" value="28" />
                    <Picker.Item label="29" value="29" />
                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="31" value="31" />
                  </Picker>
                  <Text style={{ fontWeight: "bold" }}>일 </Text>
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
              {/* 최고로 많이 했던 자세 */}
              {/* 총 사용 시간 */}
              {/* 각 자세별 사용 시간 */}
              {/* 뭐 넣을까? */}
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

          {this.state.view == "unlogin" && (
            <Overlay
              isVisible={true}
              overlayStyle={{ height: 300, justifyContent: "center" }}
            >
              <View>
                <View style={styles.textContainer}>
                  <Text style={styles.text1}>비회원 접근제한</Text>

                  <Text>로그인이 필요한 서비스 입니다.</Text>
                  <Text style={styles.text2}>로그인 후 사용해주세요.</Text>
                </View>

                <View>
                  <MyButton
                    title="로그인 하러가기"
                    radius={5}
                    onPress={() => this.props.navigation.navigate("AuthNav")}
                  ></MyButton>

                  <MyButton
                    title="돌아가기"
                    radius={5}
                    onPress={() => this.props.navigation.navigate("Guide")}
                  ></MyButton>
                </View>
              </View>
            </Overlay>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    marginBottom: 20,
    color: "#ABA095",
  },
  text2: {
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  return {
    statData: state.statdata.statData,
  };
}

export default connect(mapStateToProps)(Stat_one);
