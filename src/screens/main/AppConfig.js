import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import MyDivider from "../../components/MyDivider";
import MyHeader from "../../components/MyHeader";

export default class AppConfig extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader
          navigation={this.props.navigation}
          title="앱 정보"
          type="nav"
        ></MyHeader>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/Images/MainLogo_1.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.textcolor}>최신 버전을 사용 중 입니다.</Text>
          <Text>Ver.1.0.0</Text>
        </View>

        <View style={styles.textContainer}>
          <MyDivider title="버전 정보" left={15} />

          <Text style={styles.text1}>
            {"\n"}Version.1.0.0{"\n"}
          </Text>
          <View style={{ marginTop: 4 }}>
            <Text style={styles.text2}>∙ 로그인 버그 수정</Text>
            <Text style={styles.text2}>∙ 내 자세 예측 기능 추가</Text>
            <Text style={styles.text2}>
              ∙ 자세 설명서 추가{"\n"}
              {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <MyDivider title="의자소통 정보" left={15} />

          <Text style={styles.text2}>
            {"\n"}바른 자세를 유지하고 싶은 사용자들에게 도움을 주는 어플{"\n"}
            리케이션으로, 불량 자세를 감지하여 의자 진동이나 push알림{"\n"}
            으로 알려줍니다.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textContainer: {
    marginTop: 15,
  },
  textcolor: {
    color: "#ABA095",
    fontWeight: "bold",
  },
  text1: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    marginLeft: 15,
    fontSize: 14,
  },
  s11: {
    marginLeft: 30,
    color: "silver",
    fontWeight: "bold",
    fontSize: 16,
  },
});
