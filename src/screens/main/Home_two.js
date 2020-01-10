import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

export default class Home_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backData: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      seatData: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },
        { id: 30 },
        { id: 31 }
      ]
    };
  }
  // 이벤트 등록
  componentDidMount() {}

  // 이벤트 해제
  componentWillUnmount() {}

  _renderItem = ({ item }) => {
    return <Card containerStyle={{ flex: 1 }}></Card>;
  };

  render() {
    const { backData, seatData } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="센서"></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Card title="등받이" containerStyle={{ width: "100%", flex: 1 }}>
              {/* <FlatList
                data={backData}
                horizontal={true}
                renderItem={(item, index) => this._renderItem(item)}
                keyExtractor={item => item.id.toString()} // 각 아이템의 키 값을 지정
              /> */}
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
                        backgroundColor: "white",
                        height: 100,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    />
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
                        backgroundColor: "white",
                        height: 100,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    />
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
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    />
                  ))}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 8
                }}
              >
                {this.state.seatData
                  .filter(e => e.id > 6 && e.id <= 20)
                  .map(e => (
                    <View
                      style={{
                        width: "5%",
                        height: 40,
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    />
                  ))}
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                {this.state.seatData
                  .filter(e => e.id > 20)
                  .map(e => (
                    <View
                      style={{
                        width: "7%",
                        height: 40,
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                      key={e.id}
                    />
                  ))}
              </View>
              <Text>엉덩이쪽</Text>
              {/* <FlatList
                data={seatData.filter(e => e.id <= 10)}
                ListFooterComponentStyle={{
                  flex: 1,
                  justifyContent: "space-around"
                }}
                horizontal={true}
                renderItem={(item, index) => this._renderItem(item)}
                keyExtractor={item => item.id.toString()} // 각 아이템의 키 값을 지정
              />
              <FlatList
                data={seatData.filter(e => e.id > 10 && e.id <= 25)}
                ListFooterComponentStyle={{
                  flex: 1,
                  justifyContent: "space-around"
                }}
                horizontal={true}
                renderItem={(item, index) => this._renderItem(item)}
                keyExtractor={item => item.id.toString()} // 각 아이템의 키 값을 지정
              />
              <FlatList
                data={seatData.filter(e => e.id > 25)}
                ListFooterComponentStyle={{
                  flex: 1,
                  justifyContent: "space-around"
                }}
                horizontal={true}
                renderItem={(item, index) => this._renderItem(item)}
                keyExtractor={item => item.id.toString()} // 각 아이템의 키 값을 지정
              /> */}
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
