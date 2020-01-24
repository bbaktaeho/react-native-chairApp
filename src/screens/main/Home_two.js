import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card, Button } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

import BluetoothSerial from "react-native-bluetooth-serial-next";

export default class Home_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backData: [
        { id: 1, data: 0 },
        { id: 2, data: 0 },
        { id: 3, data: 0 },
        { id: 4, data: 0 }
      ],
      seatData: [
        { id: 1, data: 0 },
        { id: 2, data: 0 },
        { id: 3, data: 0 },
        { id: 4, data: 0 },
        { id: 5, data: 0 },
        { id: 6, data: 0 },
        { id: 7, data: 0 },
        { id: 8, data: 0 },
        { id: 9, data: 0 },
        { id: 10, data: 0 },
        { id: 11, data: 0 },
        { id: 12, data: 0 },
        { id: 13, data: 0 },
        { id: 14, data: 0 },
        { id: 15, data: 0 },
        { id: 16, data: 0 },
        { id: 17, data: 0 },
        { id: 18, data: 0 },
        { id: 19, data: 0 },
        { id: 20, data: 0 },
        { id: 21, data: 0 },
        { id: 22, data: 0 },
        { id: 23, data: 0 },
        { id: 24, data: 0 },
        { id: 25, data: 0 },
        { id: 26, data: 0 },
        { id: 27, data: 0 },
        { id: 28, data: 0 },
        { id: 29, data: 0 },
        { id: 30, data: 0 },
        { id: 31, data: 0 }
      ]
    };
  }

  componentDidMount() {
    let { backData, seatData } = this.state;
    let splitData = [];
    let vib = [];
    let back = [];
    let seat = [];
    if (global.connected) {
      BluetoothSerial.readEvery(
        (data, intervalId) => {
          splitData = data.split(",");
          vib = splitData[2];
          global.vib = vib;
          back = splitData[1].split("^");
          seat = splitData[0].split("^");
          for (i in backData) {
            if (i == 3) backData[i].data = parseInt(back[i].substring(0, 3));
            else backData[i].data = parseInt(back[i]);
          }
          for (i in seatData) seatData[i].data = parseInt(seat[i]);

          this.setState({ backData, seatData });

          if (this.imBoredNow && intervalId) {
            clearInterval(intervalId);
          }
        },
        1500,
        "\r\n"
      );
    }
  }

  render() {
    const { backData, seatData } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="센서"></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Card title="등받이" containerStyle={{ width: "100%", flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 8
                }}
              >
                {backData
                  .filter(e => e.id <= 2)
                  .map(e => (
                    <View
                      style={{
                        width: "45%",
                        backgroundColor: `rgb(${(
                          (e.data % 9) *
                          15
                        ).toString()}, 0, 0)`,
                        height: 100,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    ></View>
                  ))}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                {backData
                  .filter(e => e.id > 2)
                  .map(e => (
                    <View
                      style={{
                        width: "45%",
                        backgroundColor: `rgb(${(
                          (e.data % 9) *
                          15
                        ).toString()}, 0, 0)`,
                        height: 100,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    ></View>
                  ))}
              </View>
            </Card>
            <Card title="엉덩받이" containerStyle={{ width: "100%", flex: 1 }}>
              <Text>다리쪽</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 8
                }}
              >
                {seatData
                  .filter(e => e.id <= 6)
                  .map(e => (
                    <View
                      style={{
                        width: "14%",
                        height: 40,
                        backgroundColor: `rgb(${(
                          (e.data % 9) *
                          15
                        ).toString()}, 0, 0)`,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    ></View>
                  ))}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 8
                }}
              >
                {seatData
                  .filter(e => e.id > 6 && e.id <= 20)
                  .map(e => (
                    <View
                      style={{
                        width: "5%",
                        height: 40,
                        backgroundColor: `rgb(${(
                          (e.data % 9) *
                          15
                        ).toString()}, 0, 0)`,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    ></View>
                  ))}
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                {seatData
                  .filter(e => e.id > 20)
                  .map(e => (
                    <View
                      style={{
                        width: "7%",
                        height: 40,
                        backgroundColor: `rgb(${(
                          (e.data % 9) *
                          15
                        ).toString()}, 0, 0)`,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    ></View>
                  ))}
              </View>
              <Text>엉덩이쪽</Text>
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
    alignItems: "center"
  }
});
