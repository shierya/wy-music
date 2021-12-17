//import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable"; //对代码进行优化
import { reducer as recommendReducer } from "@/pages/home/c-pages/recommend/store";
import { reducer as songReducer } from "@/components/player-bar/store";

const reducer=combineReducers({
  recommend:recommendReducer,
  song:songReducer
})

export default reducer