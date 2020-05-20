import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const StatisticsEx = ({ p }) => {
  let sum = p.reduce((a, b) => a + b);

  let time = `${parseInt(sum / 3600)}시간 ${parseInt((sum % 3600) / 60)}분`;
  let max = Math.max.apply(null, p);
  let maxIndex = p.indexOf(max);
  let posture = "바른 자세";
  if (maxIndex != 0) posture = "나쁜 자세";
  let list = [
    { title: "사용 시간", sub: null, rightTitle: time, bDivider: true },
    { title: "많이 앉은 자세", sub: "P" + maxIndex, rightTitle: posture },
  ];

  return (
    <View>
      {list.map((e, i) => (
        <ListItem
          key={i}
          titleStyle={{ fontSize: 12, color: "black", fontWeight: "bold" }}
          subtitleStyle={{ fontSize: 10 }}
          rightTitleStyle={{ fontSize: 12, color: "black" }}
          title={e.title}
          subtitle={e.sub}
          rightTitle={e.rightTitle}
          bottomDivider={e.bDivider}
        />
      ))}
    </View>
  );
};

export default StatisticsEx;
