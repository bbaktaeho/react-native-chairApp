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
  ],
  angle: 0,
  battery: 0
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
            id: 4,
            data: action.payload5
          }
        ],
        seatData: [
          { id: 1, data: action.payload6[0] },
          { id: 2, data: action.payload6[1] },
          { id: 3, data: action.payload6[2] },
          { id: 4, data: action.payload6[3] },
          { id: 5, data: action.payload6[4] },
          { id: 6, data: action.payload6[5] },
          { id: 7, data: action.payload6[6] },
          { id: 8, data: action.payload6[7] },
          { id: 9, data: action.payload6[8] },
          { id: 10, data: action.payload6[9] },
          { id: 11, data: action.payload6[10] },
          { id: 12, data: action.payload6[11] },
          { id: 13, data: action.payload6[12] },
          { id: 14, data: action.payload6[13] },
          { id: 15, data: action.payload6[14] },
          { id: 16, data: action.payload6[15] },
          { id: 17, data: action.payload6[16] },
          { id: 18, data: action.payload6[17] },
          { id: 19, data: action.payload6[18] },
          { id: 20, data: action.payload6[19] },
          { id: 21, data: action.payload6[20] },
          { id: 22, data: action.payload6[21] },
          { id: 23, data: action.payload6[22] },
          { id: 24, data: action.payload6[23] },
          { id: 25, data: action.payload6[24] },
          { id: 26, data: action.payload6[25] },
          { id: 27, data: action.payload6[26] },
          { id: 28, data: action.payload6[27] },
          { id: 29, data: action.payload6[28] },
          { id: 30, data: action.payload6[29] },
          { id: 31, data: action.payload6[30] }
        ],
        angle: action.payload7,
        battery: action.payload8
      };

    case types.SEATCHANGE:
      return {
        seatData: {
          data: action.payload2
        }
      };

    default:
      return state;
  }
};
