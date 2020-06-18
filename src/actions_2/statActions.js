import types from "./types";

export function plus_1(num) {
  return {
    type: types.PLUS_1,
    payload: num,
  };
}
export function plus_2(num) {
  return {
    type: types.PLUS_2,
    payload: num,
  };
}

export function plus_3(num) {
  return {
    type: types.PLUS_3,
    payload: num,
  };
}

export function plus_4(num) {
  return {
    type: types.PLUS_4,
    payload: num,
  };
}

export function plus_5(num) {
  return {
    type: types.PLUS_5,
    payload: num,
  };
}

export function plus_6(num) {
  return {
    type: types.PLUS_6,
    payload: num,
  };
}
export function pos_0(num) {
  return {
    type: types.POS_0,
    payload: num,
  };
}
export function up(num1, num2, num3, num4, num5, num6) {
  return {
    type: types.UP,
    payload: num1,
    payload2: num2,
    payload3: num3,
    payload4: num4,
    payload5: num5,
    payload6: num6,
  };
}
export function clear() {
  return {
    type: types.CLEAR,
  };
}
