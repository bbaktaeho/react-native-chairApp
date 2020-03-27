import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  Text
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { Svg, Rect } from "react-native-svg";
import _ from "lodash";
import { connect } from "react-redux";
import initStore from "../../store/index";
import ActionCreator from "../../actions/index.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const store = initStore();

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    let z = ((x - 0) * (255 - 0)) / (60 - 0) + 0;
    let y = 245 - parseInt(z);
    return `rgb(${y},255,${y})`;
  }

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }
  connecte() {
    if (global.connect == true) return "rgb(0, 255, 0)";
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
    const { backData, seatData } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
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
                name={this.batterycheck(0)}
                type="font-awesome"
              ></Icon>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={require("../../assets/Images/df.png")}
              style={{ width: 415, height: 230 }}
              resizeMode="contain"
            >
              <Svg width={420} height={250}>
                <Rect
                  x="105"
                  y="30"
                  width="90"
                  height="70"
                  fill={this.map1(30)}
                />
                <Rect
                  x="220"
                  y="30"
                  width="90"
                  height="70"
                  fill={this.map1(15)}
                />
                <Rect
                  x="105"
                  y="130"
                  width="90"
                  height="70"
                  fill={this.map1(10)}
                />
                <Rect
                  x="220"
                  y="130"
                  width="90"
                  height="70"
                  fill={this.map1(20)}
                />
              </Svg>
            </ImageBackground>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("../../assets/Images/as.png")}
              style={{ width: 410, height: 230 }}
              resizeMode="contain"
            >
              <Svg width={screenWidth} height={250}>
                <Rect
                  x="65"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(25)}
                />
                <Rect
                  x="105"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(27)}
                />
                <Rect
                  x="145"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(9)}
                />
                <Rect
                  x="240"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(6)}
                />
                <Rect
                  x="280"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(25)}
                />
                <Rect
                  x="320"
                  y="170"
                  width="35"
                  height="25"
                  fill={this.map1(22)}
                />

                <Rect
                  x="32"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(11)}
                />
                <Rect
                  x="56"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(18)}
                />
                <Rect
                  x="80"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(16)}
                />
                <Rect
                  x="104"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(27)}
                />
                <Rect
                  x="128"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(26)}
                />
                <Rect
                  x="152"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(23)}
                />
                <Rect
                  x="176"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(9)}
                />
                <Rect
                  x="200"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(11)}
                />
                <Rect
                  x="224"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(13)}
                />
                <Rect
                  x="248"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(21)}
                />
                <Rect
                  x="272"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(20)}
                />
                <Rect
                  x="296"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(23)}
                />
                <Rect
                  x="320"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(25)}
                />
                <Rect
                  x="344"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(23)}
                />
                <Rect
                  x="368"
                  y="100"
                  width="20"
                  height="25"
                  fill={this.map1(16)}
                />
                <Rect
                  x="50"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(0)}
                />
                <Rect
                  x="80"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(10)}
                />
                <Rect
                  x="110"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(16)}
                />
                <Rect
                  x="140"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(12)}
                />
                <Rect
                  x="170"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(19)}
                />
                <Rect
                  x="220"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(20)}
                />
                <Rect
                  x="250"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(21)}
                />
                <Rect
                  x="280"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(19)}
                />
                <Rect
                  x="310"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(10)}
                />
                <Rect
                  x="340"
                  y="30"
                  width="25"
                  height="25"
                  fill={this.map1(5)}
                />
              </Svg>
            </ImageBackground>
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
