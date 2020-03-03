import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

//source={{uri: }}

export default class Privacy extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  async componentWillMount() {
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

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email, name, Password } = this.state;

    return (
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.container1}>
            <MyHeader
              navigation={this.props.navigation}
              title="내 정보"
            ></MyHeader>
            <View style={styles.header}></View>
            <Image
              style={styles.avatar}
              source={require("../../assets/Images/ex.png")}
            />
          </View>

          <View style={styles.container2}>
            <View style={styles.nameContainer}>
              <Text style={{ fontSize: 23, fontWeight: "bold" }}>안녕</Text>
            </View>

            <View style={styles.inputContainer}>
              <Input
                onChangeText={val => {
                  this.onChangeText("email", val);
                }}
                value={this.state.email}
                containerStyle={{ paddingBottom: 13 }}
                leftIcon={<Text>이메일ㅤㅤ</Text>}
              ></Input>

              <Input
                onChangeText={val => {
                  this.onChangeText("name", val);
                }}
                value={this.state.email}
                containerStyle={{ paddingBottom: 13 }}
                leftIcon={<Text>이름ㅤㅤㅤ</Text>}
              ></Input>

              <Input
                onChangeText={val => {
                  this.onChangeText("password", val);
                }}
                secureTextEntry={true}
                value={this.state.email}
                containerStyle={{ paddingBottom: 13 }}
                leftIcon={<Text>비밀번호ㅤ</Text>}
              >
                <Text>123456789</Text>
              </Input>
            </View>

            <View style={styles.touchcontent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{ color: "white" }}>수정하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{ color: "white" }}>회원탈퇴</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
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
    marginTop: 200
  },
  nameContainer: {
    marginTop: 50
  },
  body: {
    marginTop: 40
  },
  imageContainer: {
    marginTop: 20
  },
  inputContainer: {
    paddingBottom: 35,
    width: "80%",
    marginTop: 20
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "38%",
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#C8A480"
  },
  touchcontent: {
    flexDirection: "row"
  }
});
