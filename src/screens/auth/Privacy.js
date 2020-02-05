import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import MyHeader from "../../components/MyHeader";

//source={{uri: }}

export default class Privacy extends React.Component {
  state = {
    email,
    name
  };
  //will-rendering-did
  //생명주기 사용으로 렌더링, 따로 함수 불러올거면 그 함수 안에 this.setState선언해야 렌더링 가능
  async componentWillMount() {
    //accountShow();
    this.state.email = await AsyncStorage.getItem("user_email");
    this.state.name = await AsyncStorage.getItem("user_name");
  }

  async accountShow() {
    // const email = await AsyncStorage.getItem("user_email");
    // const name = await AsyncStorage.getItem("user_name");
    // this.setState({email,name});
    // fetch(host + "/api/auth/account", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //   })//바디 : 바디에 써서 서버로 보내는 것
    // }).then(resData => {
    //   const res = JSON.parse(resData._bodyInit);
    //   if (res.success) {
    //     let loginData = {
    //       email: res.email,
    //       name: res.name,
    //       message: res.message,
    //       accessToken: res.accessToken
    //     };
    //     // console.log(loginData);
    //     this.props.navigation.navigate("AuthLoading", loginData);
    //   } else Alert.alert(res.success, res.message);
    // });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="내 정보"></MyHeader>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image
            style={styles.avatar}
            source={require("../../assets/Images/ex.png")}
          />

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>abc123</Text>
            </View>

            <View>
              <TextInput
                style={styles.inputtextsty}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="black"
                maxFontSizeMultiplier="50"
                secureTextEntry={true}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                style={styles.inputtextsty2}
                placeholder="ID"
                underlineColorAndroid="black"
                maxFontSizeMultiplier="10"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.inputtextsty2}
                placeholder="PassWord"
                underlineColorAndroid="black"
                maxFontSizeMultiplier="10"
                secureTextEntry={true}
              />
            </View>

            <View style={styles.touchcontent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>수정하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>회원탈퇴</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "gainsboro",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 28,
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 30,
    marginHorizontal: 3,
    backgroundColor: "gainsboro"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputtextsty: {
    marginTop: 20,
    marginLeft: 90,
    width: 250,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  inputtextsty2: {
    marginTop: 10,
    marginLeft: 90,
    width: 250,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  touchcontent: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 40
  }
});
