import types from "./types";

export function backchange(num, da, da2, da3, da4) {
  return {
    type: types.BACKCHANGE,
    payload: num,
    payload2: da,
    payload3: da2,
    payload4: da3,
    payload5: da4
  };
}

export function seatchange(num, da) {
  return {
    type: types.SEATCHANGE,
    payload: num,
    payload2: da
  };
}
