import React from "react";
import { StyleSheet, Text, View, Image, AsyncStorage } from "react-native";
import { Input, Icon } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import AuthButton from "../../components/AuthButton";

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
      <View style={styles.container}>
        <View style={styles.container}>
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

        <View View style={styles.container}>
          <Text>안녕</Text>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={val => {
                this.onChangeText("email", val);
              }}
              value={this.state.email}
              containerStyle={{ paddingBottom: 13 }}
              placeholder="이메일"
            />
          </View>

          <View style={styles.buttonContainer}>
            <AuthButton title="수정하기" backColor="#C8A480"></AuthButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginTop: 230
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
  imageContainer: {
    marginTop: 20
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingBottom: 35,
    width: "90%"
  },
  buttonContainer: {
    width: "88%"
  },
  touchableContainer: {
    marginTop: 30
  },
  text: {
    fontStyle: "italic",
    color: "#CEAEA7"
  }
});

{
  /* <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Input
              onChangeText={val => {
                this.onChangeText("email", val);
              }}
              value={this.state.email}
              containerStyle={{ paddingBottom: 13 }}
              placeholder="이메일"
            />

            <Input
              onChangeText={val => {
                this.onChangeText("password", val);
              }}
              value={this.state.passwd}
              placeholder="비밀번호"
              secureTextEntry={true}
            />
          </View> */
}
