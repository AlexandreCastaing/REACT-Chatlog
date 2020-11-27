import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import chatlogs from "@redux/chatlogs/reducer";
import user from "@redux/user/reducer";
import chatlogCreate from "@redux/chatlogCreate/reducer";
import chatlogScreen from "@redux/chatlogScreen/reducer";

const reducers = {
  chatlogs,
  user,
  chatlogCreate,
  chatlogScreen,
};

export default createStore(
  persistCombineReducers(
    {
      key: "root",
      storage: AsyncStorage,
    },
    reducers
  ),
  composeWithDevTools(applyMiddleware(thunk))
);
