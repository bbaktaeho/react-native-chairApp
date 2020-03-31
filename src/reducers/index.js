// reducers 폴더에 모든 reducer(데이터 저장소)를 index.js 파일에서 결합하여 전역 state 를 구성
import { combineReducers } from "redux";
import bluetoothReducer from "./bluetoothReducer";
import statReducer from "./statReducer";

export default combineReducers({
  bluedata: bluetoothReducer,
  statdata: statReducer
});
