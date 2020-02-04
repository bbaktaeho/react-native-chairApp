import React from "react";
import { View, ScrollView, Text, Switch } from "react-native";
import { Input, Icon, Button, ListItem } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValued: false,

      list: [
        {
          name: "푸시 알림",
          right: () => <Switch></Switch>
        },

        {
          name: "진동 설정",
          right: () => (
            <Icon
              name="arrow-forward"
              onPress={() => props.navigation.navigate("Vib")}
            ></Icon>
          )
        }
      ]
    };
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        <MyHeader navigation={this.props.navigation} title="설정"></MyHeader>
        <View>
          <ScrollView>
            {list.map((l, i) => (
              <ListItem
                key={i}
                // leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                // subtitle={l.subtitle}
                bottomDivider
                rightElement={l.right}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Set;
