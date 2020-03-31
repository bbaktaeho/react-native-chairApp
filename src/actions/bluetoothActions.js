import types from "./types";

export function seatchange(num, da) {
  return {
    type: types.SEATCHANGE,
    payload: num,
    payload2: da
  };
}

export function backchange(da, da2, da3, da4, da5, da6, da7) {
  return {
    type: types.BACKCHANGE,
    payload2: da,
    payload3: da2,
    payload4: da3,
    payload5: da4,
    payload6: da5,
    payload7: da6,
    payload8: da7
  };
}
