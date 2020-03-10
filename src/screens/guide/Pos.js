import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage
} from "react-native";
import { Card, Button } from "react-native-elements";

import { Provider, connect } from "react-redux";
import initStore from "../../store/index";
import ActionCreator from "../../actions/index.js";

const store = initStore();

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    return 255 - ((x - 0) * (255 - 0)) / (1000 - 0) + 0;
  }
  0;

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }

  render() {
    const { backData, seatData } = this.props;

    return (
      <View style={{ flex: 1 }}>
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
                        backgroundColor: `rgb(255, ${this.map1(
                          e.data
                        ).toString()} , ${this.map1(e.data).toString()})`,
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
                        backgroundColor: `rgb(255, ${this.map1(
                          e.data
                        ).toString()} , ${this.map1(e.data).toString()})`,
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
                        backgroundColor: `rgb(255, ${this.map2(
                          e.data
                        ).toString()} , ${this.map2(e.data).toString()})`,
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
                  .filter(e => e.id > 6 && e.id <= 21)
                  .map(e => (
                    <View
                      style={{
                        width: "5%",
                        height: 40,
                        backgroundColor: `rgb(255, ${this.map2(
                          e.data
                        ).toString()} , ${this.map2(e.data).toString()})`,
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
                  .filter(e => e.id > 21)
                  .map(e => (
                    <View
                      style={{
                        width: "7%",
                        height: 40,
                        backgroundColor: `rgb(255, ${this.map2(
                          e.data
                        ).toString()} , ${this.map2(e.data).toString()})`,
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
          <View></View>
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

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (da, da2, da3, da4, da5) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pos);
