import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Picker, Text } from "react-native";

import MyHeader from "../../components/MyHeader";
import { Card } from "react-native-elements";
import { BarChart } from "react-native-chart-kit";
import divCardStyle from "../../myStyles/divCardStyle";

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

class Stat_two extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      num: 0,
      year: "",
      month: "",
    };
  }

  componentDidMount() {
    const date2 = new Date();
    this.setState({ year: date2.getFullYear().toString() });
    date3 = date2.getMonth() + 1;
    this.setState({ month: date3.toString() });
  }

  render() {
    const data = {
      labels: ["p1", "p2", "p3", "p4", "p5", "p6"],
      datasets: [
        {
          data: [80, 50, 40, 60, 20, 60],
        },
      ],
    };

    const { year, month } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Card containerStyle={divCardStyle.c}>
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
                    color: "#CEAEA7",
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
            </Card>
            <Card containerStyle={divCardStyle.c}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BarChart
                  data={data}
                  width={350}
                  height={350}
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                />
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  pickContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Stat_two;
