import chatlogsActions from "./constants";
import Chatlog from "@screens/Chatlog";

const initialState = {
  chatlogs: [
    {
      id: 1,
      chatlogs: 5,
      title: "Parfait"
    }
  ],
};

export default function chatlogsReducer(state = initialState, action) {
  switch (action.type) {
    case chatlogsActions.OPEN_CHATLOG:
      return {
        ...state,
        chatlog: action.chatlog,
      };
    default:
      return state;
  }
}
