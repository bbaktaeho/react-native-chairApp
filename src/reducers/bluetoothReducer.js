import types from "../actions/types";

const initState = {
  backData: [
    { id: 1, data: 0 },
    { id: 2, data: 0 },
    { id: 3, data: 0 },
    { id: 4, data: 0 }
  ],
  seatData: [
    { id: 1, data: 0 },
    { id: 2, data: 0 },
    { id: 3, data: 0 },
    { id: 4, data: 0 },
    { id: 5, data: 0 },
    { id: 6, data: 0 },
    { id: 7, data: 0 },
    { id: 8, data: 0 },
    { id: 9, data: 0 },
    { id: 10, data: 0 },
    { id: 11, data: 0 },
    { id: 12, data: 0 },
    { id: 13, data: 0 },
    { id: 14, data: 0 },
    { id: 15, data: 0 },
    { id: 16, data: 0 },
    { id: 17, data: 0 },
    { id: 18, data: 0 },
    { id: 19, data: 0 },
    { id: 20, data: 0 },
    { id: 21, data: 0 },
    { id: 22, data: 0 },
    { id: 23, data: 0 },
    { id: 24, data: 0 },
    { id: 25, data: 0 },
    { id: 26, data: 0 },
    { id: 27, data: 0 },
    { id: 28, data: 0 },
    { id: 29, data: 0 },
    { id: 30, data: 0 },
    { id: 31, data: 0 }
  ]
};

export default bluedata = (state = initState, action) => {
  switch (action.type) {
    case types.BACKCHANGE:
      return {
        backData: [
          {
            id: 1,
            data: action.payload2
          },
          {
            id: 2,
            data: action.payload3
          },
          {
            id: 3,
            data: action.payload4
          },
          {
            id: action.payload,
            data: action.payload
          }
        ]
      };

    case types.SEATCHANGE:
      if (seatData.id == action.payload) {
        return {
          seatData: {
            data: action.payload2
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
