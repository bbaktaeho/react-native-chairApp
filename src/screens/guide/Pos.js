import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text
} from "react-native";
import { Icon, ListItem, Card, Image } from "react-native-elements";
import { Svg, Rect } from "react-native-svg";
import _ from "lodash";
import { connect } from "react-redux";
import initStore from "../../store/index";
import ActionCreator from "../../actions/index.js";
import { $CombinedState } from "redux";
import divCardStyle from "../../myStyles/divCardStyle";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const store = initStore();

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    return "rgb(0,0,0)";
    /*let z = ((x - 0) * (245 - 0)) / (60 - 0) + 0;
    let y = 245 - parseInt(z);
    return `rgb(${y},255,${y})`;*/
  }

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }
  connecte() {
    if (global.connected == true) return "rgb(0, 255, 0)";
    else return "rgb(255, 0, 0)";
  }
  batterycheck(x) {
    if (x > 80) return "battery-full";
    else if (50 < x && x <= 79) return "battery-three-quarters";
    else if (26 < x && x <= 49) return "battery-half";
    else if (6 < x && x <= 24) return "battery-quarter";
    else return "battery-empty";
  }
  render() {
    const { backData, seatData, angle, battery } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Card containerStyle={divCardStyle.c}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                  <Text style={{ fontSize: 18 }}>연결 상태 : </Text>
                  <Icon
                    name="circle"
                    color={this.connecte()}
                    type="font-awesome"
                  ></Icon>
                </View>
                <View style={{ paddingRight: 10 }}>
                  <Icon
                    size={30}
                    name={this.batterycheck(battery)}
                    type="font-awesome"
                  ></Icon>
                </View>
              </View>
            </Card>
            <Card containerStyle={divCardStyle.c}>
              <Svg width={screenWidth} height="230">
                <Rect
                  x="23%"
                  y="17%"
                  width="15%"
                  height="20%"
                  fill={this.map1(backData[0].data)}
                />
                <Rect
                  x="48%"
                  y="17%"
                  width="15%"
                  height="20%"
                  fill={this.map1(backData[1].data)}
                />
                <Rect
                  x="23%"
                  y="63%"
                  width="15%"
                  height="20%"
                  fill={this.map1(backData[2].data)}
                />
                <Rect
                  x="48%"
                  y="63%"
                  width="15%"
                  height="20%"
                  fill={this.map1(backData[3].data)}
                />
              </Svg>
            </Card>
            <Card>
              <Svg width={screenWidth} height="300">
                <Rect
                  x="11%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[0].data)}
                />
                <Rect
                  x="21.5%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[1].data)}
                />
                <Rect
                  x="32%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[2].data)}
                />
                <Rect
                  x="59%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[3].data)}
                />
                <Rect
                  x="69.5%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[4].data)}
                />
                <Rect
                  x="80%"
                  y="75%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[5].data)}
                />
                <Rect
                  x="5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[6].data)}
                />
                <Rect
                  x="11%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[7].data)}
                />
                <Rect
                  x="17%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[8].data)}
                />
                <Rect
                  x="23%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[9].data)}
                />
                <Rect
                  x="29%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[10].data)}
                />
                <Rect
                  x="35.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[11].data)}
                />
                <Rect
                  x="41.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[12].data)}
                />
                <Rect
                  x="47.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[13].data)}
                />
                <Rect
                  x="53.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[14].data)}
                />
                <Rect
                  x="59.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[15].data)}
                />
                <Rect
                  x="66%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[16].data)}
                />
                <Rect
                  x="72%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[17].data)}
                />
                <Rect
                  x="78%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[18].data)}
                />
                <Rect
                  x="84%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[19].data)}
                />
                <Rect
                  x="90%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[20].data)}
                />
                <Rect
                  x="6%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[21].data)}
                />
                <Rect
                  x="14.5%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[22].data)}
                />
                <Rect
                  x="23%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[23].data)}
                />
                <Rect
                  x="31.5%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[24].data)}
                />
                <Rect
                  x="40%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[25].data)}
                />
                <Rect
                  x="53%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[26].data)}
                />
                <Rect
                  x="61.5%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[27].data)}
                />
                <Rect
                  x="70%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[28].data)}
                />
                <Rect
                  x="78.5%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[29].data)}
                />
                <Rect
                  x="87%"
                  y="14%"
                  width="7%"
                  height="11%"
                  fill={this.map1(seatData[30].data)}
                />
              </Svg>
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

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
    angle: state.bluedata.angle,
    battery: state.bluedata.battery
  };
}
function mapDispatchToProps(dispatch) {
  return {
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    },
    backchange: (da, da2, da3, da4, da5, da6, da7) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5, da6, da7));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Pos);
