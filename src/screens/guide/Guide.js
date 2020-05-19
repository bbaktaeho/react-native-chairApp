import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage, Dimensions } from "react-native";
import { Image } from "react-native-elements";

import Swiper from "react-native-swiper";
import MyButton from "../../components/MyButton";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  button: {
    width: "88%",
    flex: 1,
    marginTop: 70,
  },
});

export default class SwiperComponent extends Component {
  loginCheck = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.props.navigation.navigate("MainNav");
    } else {
      const res = await Fetch(
        URL.check,
        "PUT",
        {
          check: 1,
        },
        token
      );

      //수정해야함
      if (res == "error") {
        console.log("fetch error");
      } else {
        const body = JSON.parse(res._bodyText);
        console.log(body.message);
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
          <Image
            source={require("../../assets/Images/m_2.png")}
            style={{
              height: 550,
              width: screenWidth,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.text}>무릎은 90도를 유지하고</Text>
          <Text style={styles.text}>엉덩이와 허벅지는</Text>
          <Text style={styles.text}>바닥과 평행을 유지해주세요</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={require("../../assets/Images/m_3.png")}
            style={{
              height: 550,
              width: screenWidth,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.text}>
            허리를 세우고 등받이에 닿도록 해주세요
          </Text>
        </View>

        <View style={styles.container}>
          <Image
            source={require("../../assets/Images/m_1.png")}
            style={{
              height: 550,
              width: screenWidth,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.text}>어깨는 등과 일직선을 이루고,</Text>
          <Text style={styles.text}>앞으로 구부러지지 않도록 해주세요</Text>
        </View>

        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/Images/MainLogo_3.png")}
              style={{
                width: 250,
                height: 250,
              }}
            />

            <Text style={styles.text}>바른 자세로 앉으셨다면 </Text>
            <Text style={styles.text}>의자소통을 시작해주세요</Text>
          </View>

          <View style={styles.button}>
            <MyButton
              onPress={() => this.loginCheck()}
              title="홈으로 가기"
            ></MyButton>
          </View>
        </View>
      </Swiper>
    );
  }
}
