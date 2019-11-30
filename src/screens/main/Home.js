import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// import Header from "../../navigations/DrawerHeader";

export default class Home extends Component {
  render() {
    return (
      <View>
        {/* <Header></Header> */}
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text>홈</Text>
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
// import React, { Component } from "react";
// import { Text, Image } from "react-native";
// import { Container, Content, Header, Left, Body, Icon } from "native-base";
// import Ionicon from "react-native-vector-icons/Ionicons";

// // import Header from "../../navigations/DrawerHeader";

// export default class Home extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Icon
//               name="ios-menu"
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}
//             ></Icon>
//           </Left>
//         </Header>
//         <Content contentContainerStyle={styles.container}>
//           <Text>홈</Text>
//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
