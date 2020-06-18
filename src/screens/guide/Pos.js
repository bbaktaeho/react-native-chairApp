import React, { Component } from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import { Icon, Card } from "react-native-elements";
import { Svg, Rect } from "react-native-svg";
import _ from "lodash";
import { connect } from "react-redux";
import ActionCreator from "../../actions/index.js";
import divCardStyle from "../../myStyles/divCardStyle";
import MyDivider from "../../components/MyDivider";

const screenWidth = Dimensions.get("window").width;

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    let z = ((x - 0) * (245 - 0)) / (60 - 0) + 0;
    let y = 242 - parseInt(z);
    return `rgb(${y},242,${y})`;
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
    const { backData, seatData, battery } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Card containerStyle={divCardStyle.c}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ fontSize: 14 }}>연결 </Text>
                    <Icon
                      name="circle"
                      size={20}
                      color={this.connecte()}
                      type="font-awesome"
                      style={{ marginTop: 20 }}
                    ></Icon>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 280,
                    }}
                  >
                    <Icon
                      size={20}
                      name={this.batterycheck(battery)}
                      type="font-awesome"
                    ></Icon>
                  </View>
                </View>
              </Card>
            </View>

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="등 압력분포" />
            </View>

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

            <View
              style={{
                marginTop: 15,
              }}
            >
              <MyDivider title="엉덩이 압력분포" />
            </View>

            <Card containerStyle={divCardStyle.c}>
              <Svg width={screenWidth} height="300">
                <Rect
                  x="4%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[0].data)}
                />
                <Rect
                  x="15.5%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[1].data)}
                />
                <Rect
                  x="26%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[2].data)}
                />
                <Rect
                  x="53%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[3].data)}
                />
                <Rect
                  x="63.5%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[4].data)}
                />
                <Rect
                  x="74%"
                  y="14%"
                  width="9%"
                  height="11%"
                  fill={this.map1(seatData[5].data)}
                />
                <Rect
                  x="0%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[6].data)}
                />
                <Rect
                  x="5.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[7].data)}
                />
                <Rect
                  x="11%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[8].data)}
                />
                <Rect
                  x="16.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[9].data)}
                />
                <Rect
                  x="22%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[10].data)}
                />
                <Rect
                  x="29.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[11].data)}
                />
                <Rect
                  x="35%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[12].data)}
                />
                <Rect
                  x="41%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[13].data)}
                />
                <Rect
                  x="47%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[14].data)}
                />
                <Rect
                  x="52.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[15].data)}
                />
                <Rect
                  x="60%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[16].data)}
                />
                <Rect
                  x="65.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[17].data)}
                />
                <Rect
                  x="71%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[18].data)}
                />
                <Rect
                  x="76.5%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[19].data)}
                />
                <Rect
                  x="82%"
                  y="45%"
                  width="5%"
                  height="11%"
                  fill={this.map1(seatData[20].data)}
                />
                <Rect
                  x="6%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[21].data)}
                />
                <Rect
                  x="12.5%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[22].data)}
                />
                <Rect
                  x="19%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[23].data)}
                />
                <Rect
                  x="25.5%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[24].data)}
                />
                <Rect
                  x="32%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[25].data)}
                />
                <Rect
                  x="49%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[26].data)}
                />
                <Rect
                  x="55.5%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[27].data)}
                />
                <Rect
                  x="62%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[28].data)}
                />
                <Rect
                  x="68.5%"
                  y="75%"
                  width="6%"
                  height="11%"
                  fill={this.map1(seatData[29].data)}
                />
                <Rect
                  x="75%"
                  y="75%"
                  width="6%"
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

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
    angle: state.bluedata.angle,
    battery: state.bluedata.battery,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    },
    backchange: (da, da2, da3, da4, da5, da6, da7) => {
      dispatch(ActionCreator.backchange(da, da2, da3, da4, da5, da6, da7));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Pos);
