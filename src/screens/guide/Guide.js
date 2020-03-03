import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Image } from "react-native-elements";

import Swiper from "react-native-swiper";
import AuthButton from "../../components/AuthButton";

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
    flex: 4,
    justifyContent: "center",
    paddingBottom: 30
  },
  content2: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  content3: {
    justifyContent: "center",
    alignItems: "center"
  },
  content4: {
    width: "88%",
    paddingTop: 50
  }
});

export default class SwiperComponent extends Component {
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
              style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>무릎은 90도를 유지하고</Text>
            <Text style={styles.text}>엉덩이와 허벅지는 바닥과</Text>
            <Text style={styles.text}>평행을 유지해주세요</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              source={require("../../assets/Images/m_3.png")}
              style={{ height: "100%", width: "100%", resizeMode: "contain" }}
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
              style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            />
          </View>
          <View style={styles.content2}>
            <Text style={styles.text}>어깨는 등과 일직선을 이루고,</Text>
            <Text style={styles.text}>앞으로 구부러지지 않도록 해주세요</Text>
          </View>
        </View>
        <View style={styles.content3}>
          <Image
            source={require("../../assets/Images/chair_logo2.png")}
            style={{ width: 300, height: 300 }}
          />
          <Text style={styles.text}>바른 자세로 앉으셨다면</Text>
          <Text style={styles.text}>버튼을 눌러주세요</Text>
          <View style={styles.content4}>
            <AuthButton
              title="측정하기"
              backColor="#CEAEA7"
              onPress={() => this.props.navigation.navigate("MainNav")}
            ></AuthButton>
          </View>
        </View>
      </Swiper>
    );
  }
}
