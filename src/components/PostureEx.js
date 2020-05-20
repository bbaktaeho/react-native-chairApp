import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, ListItem, Tooltip, Text } from "react-native-elements";

const styles = StyleSheet.create({
  ListItemContainer: {},
});

const PostureEx = ({ p }) => {
  let list = [
    {
      pTitle: "P0",
      title: "바른 자세",
      subTtile: "의자를 이용하는 옳바른 자세",
      time: `${parseInt(p[0] / 3600)}시간 ${parseInt((p[0] % 3600) / 60)}분`,
      second: p[0],
    },
    {
      pTitle: "P1",
      title: "걸터 앉은 자세",
      subTtile: "의자 끝 부분에 걸터 앉은 자세",
      time: `${parseInt(p[1] / 3600)}시간 ${parseInt((p[1] % 3600) / 60)}분`,
      second: p[1],
    },
    {
      pTitle: "P2",
      title: "왼쪽으로 기울어진 자세",
      subTtile: "무게중심이 왼쪽으로 기울어진 자세(오른 다리 꼬기)",
      time: `${parseInt(p[2] / 3600)}시간 ${parseInt((p[2] % 3600) / 60)}분`,
      second: p[2],
    },
    {
      pTitle: "P3",
      title: "오른쪽으로 기울어진 자세",
      subTtile: "무게중심이 오른쪽으로 기울어진 자세(왼쪽 다리 꼬기)",
      time: `${parseInt(p[3] / 3600)}시간 ${parseInt((p[3] % 3600) / 60)}분`,
      second: p[3],
    },
    {
      pTitle: "P4",
      title: "둔부 앞 자세",
      subTtile: "둔부를 의자 앞으로 내밀어 어깨를 등받이에 기댄 자세",
      time: `${parseInt(p[4] / 3600)}시간 ${parseInt((p[4] % 3600) / 60)}분`,
      second: p[4],
    },
    {
      pTitle: "P5",
      title: "숙인 자세",
      subTtile: "등을 기대지 않고 앞으로 숙인 자세",
      time: `${parseInt(p[5] / 3600)}시간 ${parseInt((p[5] % 3600) / 60)}분`,
      second: p[5],
    },
  ];

  return (
    <View>
      {list.map((e, i) => (
        <ListItem
          key={i}
          leftAvatar={
            <Tooltip
              width={300}
              height={60}
              backgroundColor="#ABA095"
              popover={
                <Text
                  style={{ fontSize: 12, color: "white", fontWeight: "700" }}
                >
                  {e.subTtile}
                </Text>
              }
            >
              <Avatar rounded title={e.pTitle} />
            </Tooltip>
          }
          containerStyle={styles.ListItemContainer}
          titleStyle={{ fontSize: 12, color: "black", fontWeight: "bold" }}
          rightTitleStyle={{ fontSize: 12, color: "black" }}
          title={e.title}
          rightTitle={e.time}
          //   topDivider={true}
          bottomDivider={true}
        />
      ))}
    </View>
  );
};

export default PostureEx;
