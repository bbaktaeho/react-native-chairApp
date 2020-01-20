import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../components/MyHeader";

//source={{uri: }}

export default class Privacy extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="내 정보"></MyHeader>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require("../auth/ex.png")}/> 
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>abc123</Text>
              <Text style={styles.description}>정보</Text>
              
              <TouchableOpacity style={styles.buttonContainer1}>
                <Text>수정하기</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer2}>
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
  header:{
    backgroundColor: "gainsboro",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:28,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer1: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: "gainsboro",
  },
  buttonContainer2: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
    backgroundColor: "gainsboro",
  },
}
);