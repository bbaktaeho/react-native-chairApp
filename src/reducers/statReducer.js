import types from "../actions_2/types";

const initState = {
  statData: {
    data1: 0,
    data2: 0,
    data3: 0,
    data4: 0,
    data5: 0,
    data6: 0,
    pos: "의자에 앉지 않았습니다.",
    bad: 0,
  },
};

export default statdata = (state = initState, action) => {
  switch (action.type) {
    case types.UP:
      return {
        statData: {
          data1: action.payload,
          data2: action.payload2,
          data3: action.payload3,
          data4: action.payload4,
          data5: action.payload5,
          data6: action.payload6,
        },
      };
    case types.PLUS_1:
      return {
        statData: {
          data1: state.statData.data1 + parseInt(action.payload),
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: "바른자세 입니다.",
          bad: 0,
        },
      };
    case types.PLUS_2:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2 + action.payload,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: "걸터앉은 자세입니다.",
          bad: state.statData.bad + 1,
        },
      };
    case types.PLUS_3:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3 + action.payload,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: "둔부를 앞으로 한 자세 입니다.",
          bad: state.statData.bad + 1,
        },
      };
    case types.PLUS_4:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4 + action.payload,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: "오른 다리를 꼬았습니다.",
          bad: state.statData.bad + 1,
        },
      };
    case types.PLUS_5:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5 + action.payload,
          data6: state.statData.data6,
          pos: "왼 다리를 꼬았습니다.",
          bad: state.statData.bad + 1,
        },
      };
    case types.PLUS_6:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6 + action.payload,
          pos: "앞으로 숙이고 있습니다.",
          bad: state.statData.bad + 1,
        },
      };
    case types.POS_0:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: "의자에 앉지 않았습니다.",
          bad: state.statData.bad,
        },
      };
    case types.CLEAR:
      return {
        statData: {
          data1: state.statData.data1,
          data2: state.statData.data2,
          data3: state.statData.data3,
          data4: state.statData.data4,
          data5: state.statData.data5,
          data6: state.statData.data6,
          pos: state.statData.pos,
          bad: 0,
        },
      };
    default:
      return state;
  }
};
