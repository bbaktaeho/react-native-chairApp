import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay } from "react-native-elements";
import MyButton from "../components/MyButton";

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    marginBottom: 20,
    color: "#ABA095",
  },
  text2: {
    marginBottom: 10,
  },
});

const MyOverlay = (props) => {
  return (
    <Overlay
      isVisible={true}
      overlayStyle={{ height: 300, justifyContent: "center" }}
    >
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>비회원 접근제한</Text>

          <Text>로그인이 필요한 서비스 입니다.</Text>
          <Text style={styles.text2}>로그인 후 사용해주세요.</Text>
        </View>

        <View>
          <MyButton
            title="로그인 하러가기"
            radius={5}
            onPress={() => props.navigation.navigate("AuthNav")}
          ></MyButton>

          <MyButton
            title="돌아가기"
            radius={5}
            onPress={() => props.navigation.navigate("Guide")}
          ></MyButton>
        </View>
      </View>
    </Overlay>
  );
};

export default MyOverlay;
