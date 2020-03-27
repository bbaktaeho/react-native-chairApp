import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Dimensions
} from "react-native";
import { Image } from "react-native-elements";

import Swiper from "react-native-swiper";
import AuthButton from "../../components/AuthButton";
import Fetch from "../../components/Fetch";

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20
  },
  content: {
    flex: 3,
    justifyContent: "center"
  },
  content2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content4: {
    width: "88%",
    flex: 2
  }
});

export default class SwiperComponent extends Component {
  loginCheck = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.props.navigation.navigate("MainNav");
    } else {
      const res = await Fetch(URL.check, "PUT", {
        token: token,
        check: "1"
      });

      if (res == "error") {
        console.log("fetch error");
      } else {
        console.log(res.message);
        this.props.navigation.navigate("MainNav");
      }
    }
  };

  render() {
    return (
      <Swiper
        loop={false}
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={2}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              source={require("../../assets/Images/m_2.png")}
              style={{
                height: 550,
                width: screenWidth,
                resizeMode: "contain"
              }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>무릎은 90도를 유지하고</Text>
            <Text style={styles.text}>엉덩이와 허벅지는</Text>
            <Text style={styles.text}>바닥과 평행을 유지해주세요</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              source={require("../../assets/Images/m_3.png")}
              style={{ height: 550, width: screenWidth, resizeMode: "contain" }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>
              허리를 세우고 등받이에 닿도록 해주세요
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              source={require("../../assets/Images/m_1.png")}
              style={{ height: 550, width: screenWidth, resizeMode: "contain" }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>어깨는 등과 일직선을 이루고,</Text>
            <Text style={styles.text}>앞으로 구부러지지 않도록 해주세요</Text>
          </View>
        </View>
        <View style={styles.content3}>
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/Images/chair_logo2.png")}
              style={{ width: 300, height: 300 }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>바른 자세로 앉으셨다면</Text>
            <Text style={styles.text}>버튼을 눌러주세요</Text>
          </View>
          <View style={styles.content4}>
            <AuthButton
              onPress={() => this.loginCheck()}
              title="의자소통 시작하기"
              backColor="#CEAEA7"
            ></AuthButton>
          </View>
        </View>
      </Swiper>
    );
  }
}
